# 🧠 Tutor Inteligente - Entrenador Ramiro

Una plataforma de tutoría inteligente con inteligencia artificial para aprender matemáticas. El tutor simula ser "Entrenador Ramiro", un entrenador de élite de la Universidad Nacional de Ingeniería (UNI) que guía a los estudiantes mediante metodología socrática.

![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)
![Express](https://img.shields.io/badge/Express-5.x-blue.svg)
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-AI-orange.svg)

## 🚀 Características

- **Tutor IA Inteligente**: Utiliza Google Gemini AI para generar respuestas personalizadas
- **Metodología Socrática**: El tutor no da respuestas directas, guía al estudiante para que descubra la solución
- **Sistema de Niveles**: El estudiante comienza en nivel 1 y sube de nivel cada 5 ejercicios completados correctamente
- **Chat Interactivo**: Interfaz profesional y moderna para conversar con el tutor
- **Seguimiento de Progreso**: Panel lateral con estadísticas del estudiante

## 📚 Temas Soportados

- Álgebra
- Geometría
- Trigonometría
- Cálculo
- Lógica Matemática

## 🛠️ Tecnologías

- **Backend**: Node.js + Express.js
- **IA**: Google Generative AI (Gemini)
- **Frontend**: HTML5 + CSS3 + JavaScript (Vanilla)
- **Estilos**: DM Sans + Space Grotesk (Google Fonts)

## 📁 Estructura del Proyecto

```
proyecto10/
├── index.html          # Frontend - Chat interactivo
├── ejemplo9.js         # Backend - Servidor Express con IA
├── config.js          # Configuración de la API
├── package.json       # Dependencias del proyecto
├── .env              # Variables de entorno (no incluido)
└── README.md         # Este archivo
```

## ⚡ Instalación

1. **Clona el repositorio**:
   
```
bash
   git clone <url-del-repositorio>
   cd proyecto10
   
```

2. **Instala las dependencias**:
   
```
bash
   npm install
   
```

3. **Configura las variables de entorno**:
   
   Crea un archivo `.env` en la raíz del proyecto:
   
```
env
   GEMINI_API_KEY=tu_api_key_de_google_gemini
   
```

   > ⚠️ **Importante**: Necesitas una API key de Google AI Studio. Puedes obtenerla gratis en [Google AI Studio](https://aistudio.google.com/app/apikey)

4. **Inicia el servidor**:
   
```
bash
   node ejemplo9.js
   
```

5. **Abre el frontend**:
   
   Abre el archivo `index.html` en tu navegador, o si tienes un servidor web:
   
```
bash
   # Opción 1: Abrir directamente
   npx serve .
   
   # Opción 2: Con live-server
   npx live-server
   
```

## 🎮 Uso

1. El servidor debe estar ejecutándose en `http://localhost:3000`
2. Abre `index.html` en tu navegador
3. Selecciona un tema de las sugerencias o escribe tu pregunta
4. El Entrenador Ramiro te guiará en tu aprendizaje

### Ejemplo de conversación:
```
Usuario: Quiero aprender álgebra
Entrenador: ¡Bienvenido al gimnasio mental! Antes de empezar, 
dime... ¿qué operaciones algebraicas dominas? 
¿Factorización? ¿Ecuaciones de primer grado?
```

## 🎨 Personalidad del Tutor

El Entrenador Ramiro tiene las siguientes características:

- **Exigente pero motivador**: No acepta copias ni trampas
- **Metodológico**: No permite avanzar al siguiente tema sin dominar el actual
- **使用 analogías de entrenamiento físico**: "Esa neurona está atrofiada, vamos a darle 3 repeticiones"
- **Celebra los logros**: "¡Buen set! Descansa 10 segundos y vamos por la siguiente serie"

## 📡 Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/trainer` | Envía mensaje al tutor y recibe respuesta |

### Cuerpo de la petición:
```
json
{
  "mensaje": "Tu pregunta aquí",
  "historial": [
    {"role": "user", "parts": [{"text": "Hola"}]},
    {"role": "model", "parts": [{"text": "¡Hola! Soy..."}]}
  ]
}
```

### Respuesta:
```
json
{
  "text": "Respuesta del tutor...",
  "stats": {
    "nivel": 1,
    "respuestasCompletas": 5,
    "topico": "Álgebra"
  }
}
```

## 🔧 Configuración

### Variables de Entorno

| Variable | Descripción | Requerido |
|----------|-------------|-----------|
| `GEMINI_API_KEY` | API key de Google Gemini | Sí |
| `PORT` | Puerto del servidor (por defecto 3000) | No |

### Modelos Soportados

Puedes cambiar el modelo en `config.js`:
```
javascript
modelName: "gemini-flatest"     // Más rápido
modelName: "gemma-3-12b-it"    // Más capacidades
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias.

## 📄 Licencia

ISC License

---

¡Construido con ❤️ para la educación matemática!


