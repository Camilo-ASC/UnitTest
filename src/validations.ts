export function validarNombre(nombre: string): boolean {
    const regex = /^[A-Z][a-z]+$/;
    return regex.test(nombre);
}

export function validarApellido(apellido: string): boolean {
    const regex = /^[A-Z][a-z]+$/;
    return regex.test(apellido);
}

export function validarCorreo(correo: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

export function validarFecha(fecha: string): boolean {
  // formato YYYY-MM-DD
    const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(fecha)) return false;
    const date = new Date(fecha);
        return !isNaN(date.getTime());
}

export function validarContrasena(contrasena: string): boolean {
    return contrasena.trim().length > 0;
}
