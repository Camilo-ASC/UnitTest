# TestUnitarias 🧪

Este proyecto utiliza **TypeScript**, **Jest**, **Docker** y **GitHub Actions** para realizar pruebas unitarias y automatizar el flujo de integración continua.

## 🧠 Parte 1 | Estrategia
**1. Diferencia entre CI y CD**

* **CI (Integracion Continua)**: Nos permite integrar cambios en nuestro codigo de manera eficaz en un repositorio, permitiendo su validacion automatica por medio de sus pruebas y herramientas evitando que esta misma colapse en su despliegue.
* **CD (Despliegue Continuo)**: Se automatizan los procesos de despliegue hacia su entorno de produccion pero antes debe pasar a su entorno de prueba que permite verificar si las validaciones superan el umbral.
  
Esto nos permite poder tener un control y un gestion de calidad de nuestra app antes de cualquier despliegue.

**2. Tecnologías utilizadas**

* **TypeScript**: Debido a su fuerte tipado permite la reduccion de errores y manejos de los mismo a su vez de la mantenibilidad.
* **Super-Linter**: Brindando la capacidad de validar estandares de nuestro codigo en multiples lenguajes.
* **Jest**: Un framework robusto y amplio para crear, ejecutar y estructurar pruebas.
* **Jest Coverage**: Nos permite que porcentaje de nuestro codigo esta cubierto por las pruebas.
* **Github Actions**: Permite automatizar flujos de trabajo de desarrollo de software como CI y CD.

**3. Umbral mínimo de cobertura**

* Con un umbral minimo establecido de cobertura del **80%**. Permitiendo representar la calidad y viabilidad del proyecto, brindando la garantizacion de que el codigo este validado adecuadamente sin generar una sobre exigencia de pruebas. Siendo asi el porcentaje menor establecido el Pipeline fallara automaticamente si no es alcanzado por la prueba.

## ⚙️ Parte 2 – Workflow CI/CD

* El archivo `.github/workflows/ci.yml` permite la ejecucion adecuadada del Pipeline, tomando en cuenta los eventos:
  * Push a rama Main
  * Pull_request
- **Etapas**:
    * Checkout del repositorio
    * Instalación de dependencias
    * Ejecución de linter
    * Ejecución de pruebas unitarias
    * Generación de coverage
    * Validación del umbral mínimo
    * Build del proyecto
    * Construcción de imagen Docker
    
Por lo tanto si una de las etapas llega a fallar, el Pipeline se detiene automaticamente.

## 🐳 Parte 3 – nektos/act

**¿Qué es act?**

Es una herramienta que nos brinda la posibilidad de ejecutar workflows de Github Actions de manera local, dando asi paso a una simulacion del entorno de Github sin necesidad de hacer push directamente al repositorio. Tiene unos requisitos y es tener instalado: **Docker, Git y Act**.

## 📊 Parte 4 – Validación y logs

Los logs que tiene un Workflow que permite indentificar de manera adecuada lo siguiente:
* ❌ Fallos de linter: errores de estilo o formato
* ❌ Fallos de pruebas: tests que no pasan
* ❌ Fallos de cobertura: porcentaje menor al umbral mínimo

Cuando estas son cumplidas adecuadamente se genera un archivo html que nos permite poder visualizar que porcentaje del coverage se ha obtenido, si este supera el **80%** se marca en verde y hace el build de manera adecuada. De lo contrario alguna de las etapas se marcan en rojo y no supera el umbral establecido entonces la ejecucion se detiene.

## 🤖 Parte 5 – IA y Ética

**Métodos para detectar código generado por IA**

1. El analizis de la estructuracion del proyecto y codigo. Tomando en cuenta que la inteligencia artifical genera codigos de forma perfecta o con patrones basicos que permiten su copia y pega, siendo asi visibles de manera evidente cuando no son escrito de forma autonoma por una persona.
2. Usar herramientas que permitan identificar de forma adecuada que ha sido hecho o realizado con IA. Lo cual permite revisar contenido generado autoamticamnte por las inteligencias artificiales.

**Limitaciones**

Muchas veces no podemos identificar codigo generado por IA de manera visual con facilidad, dicho su manipulacion de forma manual y cambio en la estructura del mismo. Evitando asi los patrones o la manera que fue generado por defecto, por otro punto de vista su reescritura es otra manera de que no se pueda identificar de manera adecuada, sin embargo se entiende y comprende cuando una persona realiza el codigo y tiene la capacidad de explicarlo y modificarlo sin problemas.

**Politicas propuestas**

* Usar solamente la IA para fortalecer al teoria, practicas y recopilar informacion de fuentes veridicas que permitan corroborar la raiz del aprendizaje. A su vez de ser usada para plantear situaciones y desafios que permitan poner a prueba lo investigado/aprendido.
* Generar todo el codigo con IA no es APTO, debido que no demuestra las capacidades y habilidades que tiene la persona en el area.
* Especificar el USO de la misma ya sea para reforzar teoria o soluciones complejas que puedan tener diferentes maneras de llevar acabo su objetivo por medio de su planteamiento base.
