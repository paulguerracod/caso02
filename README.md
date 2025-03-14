# Conversión de diseño a código - Maquetación web

**Conversión fiel de diseño visual a código funcional**  
**Reproducción pixel-perfect de un mockup proporcionado en HTML/CSS puro**
## ✨ Características Principales
- **Maquetar al diseño original**: Conversión precisa de medidas, colores y disposición espacial
- **Responsive Design**: Adaptación a múltiples dispositivos (Desktop, Tablet, Mobile)
- **Optimización de Assets**: 
  - Imágenes comprimidas (WebP + PNG fallback)
  - Iconos vectoriales (SVG)
- **Semántica HTML5**: Uso apropiado de etiquetas semánticas
- **Metodología BEM**: Nomenclatura CSS para mejor mantenibilidad
## 🛠 Tecnologías Utilizadas
| Tecnología | Implementación |
|------------|----------------|
| **HTML5**  | Estructura semántica |
| **CSS3**   | Flexbox, Grid, Animaciones |
## 📂 Estructura del Proyecto
styles.css  # Estilos principales
animacion.js          # Interactividad básica
index.html               # Punto de entrada principal
README.md
## 🚨 Desafíos Técnicos
1. **Precisión en medidas**  
   Uso de unidades relativas (rem/em) para mantener proporciones
   
2. **Cross-browser Compatibility**  
   Prefixes para propiedades experimentales:
   ```css
   .element {
     -webkit-transition: all 0.3s ease;
     transition: all 0.3s ease;
   }

