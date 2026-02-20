const express = require("express")
const cors = require("cors") 

const { GoogleGenerativeAI } = require("@google/generative-ai")
const config = require("./config")
const genAI = new GoogleGenerativeAI(config.apiKey)

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("public"))

let estadisticaEstudiante = {
    nivel: 1,
    repuestaCompletas: 0,
    topico: "Matemáticas Puras - Álgebra Lineal, Tema 1: Vectores y Espacios Vectoriales, física - Cinemática, Tema 1: Movimiento Rectilíneo Uniforme (MRU)",

}

let personaje = "Profesor Euler"

let perfil = `
Eres ${personaje}, un matemático de élite y experto en razonamiento lógico y pensamiento abstracto.
Tu objetivo no es dar respuestas directas, sino desarrollar la capacidad analítica y el rigor matemático del estudiante.
Formas mentes disciplinadas, capaces de demostrar, justificar y argumentar cada paso.
`

let personalidad = `
PERSONALIDAD:
- Eres exigente, preciso y extremadamente riguroso con la lógica.
- No toleras respuestas sin justificación.
- Si el alumno pide la respuesta directa, dile: "En matemáticas no existen atajos sin demostración. Muéstrame tu razonamiento paso a paso."
- Corriges con firmeza pero con intención formativa.
- Usas analogías matemáticas (ej. "Ese argumento tiene una discontinuidad lógica; necesitamos continuidad en el razonamiento").
`

let metodologia = `
METODOLOGÍA:
1. No permitas que el estudiante avance a un tema más complejo sin dominar los fundamentos (por ejemplo, no puede resolver integrales si no domina derivadas).
2. Si el alumno falla 3 veces, simplifica el problema reduciendo su complejidad (menos variables, números más pequeños, caso particular), pero nunca reveles la solución.
3. Exige que cada respuesta tenga justificación matemática clara.
4. Refuerza los logros con sobriedad académica: "Correcto. La demostración es consistente. Continuemos."
5. Fomenta el pensamiento crítico preguntando: "¿Por qué?", "¿Bajo qué condición se cumple?", "¿Es siempre verdadero?"
`
app.post("/api/trainer", async (req, res) => {
  try {
    const { mensaje, historial } = req.body

    const systemPrompt = `
${perfil}

${personalidad}

${metodologia}

ESTADO ACTUAL DEL ESTUDIANTE:
- Nivel: ${estadisticaEstudiante.nivel}
- Ejercicios completados: ${estadisticaEstudiante.respuestasCompletas}
`

    const model = genAI.getGenerativeModel({
      model: config.modelName,
      systemInstruction: systemPrompt,
    })

    const chat = model.startChat({
      history: historial || [],
    })

    const resultado = await chat.sendMessage(mensaje)
    const respuesta = await resultado.response.text()

    const respuestaNormalizada = respuesta.toLowerCase()

    if (
      respuestaNormalizada.includes("correcto") ||
      respuestaNormalizada.includes("logrado")
    ) {
      estadisticaEstudiante.respuestasCompletas++

      if (estadisticaEstudiante.respuestasCompletas % 5 === 0) {
        estadisticaEstudiante.nivel++
      }
    }

    res.json({
      text: respuesta,
      stats: estadisticaEstudiante,
    })

  } catch (error) {
    console.error("Error en el endpoint /api/trainer:", error)
    res.status(500).json({ error: "Error interno del servidor" })
  }
})


  const PORT = 3000
  app.listen(PORT, () => console.log(`Servidor escuchando en puerto en http://localhost:${PORT}`))
