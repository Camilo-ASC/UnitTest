# TestUnitarias 🧪

Este proyecto utiliza **TypeScript**, **Jest**, **Docker** y **GitHub Actions** para realizar pruebas unitarias y automatizar el flujo de integración continua.

## 🚀 Tecnologías utilizadas
- TypeScript  
- Jest  
- Docker  
- GitHub Actions  
- Super-Linter  

## ⚙️ Flujo de trabajo (CI/CD)
Cada vez que se realiza un **push a la rama main**, GitHub Actions ejecuta los siguientes pasos:
1. Linter del código (Super-Linter)
2. Pruebas unitarias con Jest
3. Compilación del proyecto
4. Construcción y publicación de imagen Docker

## 🐳 Docker
Para construir la imagen localmente:
```bash
docker build -t testunitarias .
