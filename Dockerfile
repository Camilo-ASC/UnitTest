# Imagen base ligera de Node
FROM node:20-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código al contenedor
COPY . .

# Compilar TypeScript (si tu proyecto lo requiere)
RUN npm run build || echo "Build opcional"

# Comando por defecto: ejecutar tests
CMD ["npm", "test"]
