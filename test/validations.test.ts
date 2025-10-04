import { 
    validarNombre, 
    validarApellido, 
    validarCorreo, 
    validarFecha, 
    validarContrasena 
} from "../src/validations";

describe("Validaciones de campos", () => {
    test("Nombre válido", () => {
        expect(validarNombre("Camilo")).toBe(true);
    });

    test("Nombre inválido (minúscula inicial)", () => {
        expect(validarNombre("camilo")).toBe(false);
    });

    test("Apellido válido", () => {
        expect(validarApellido("Sanchez")).toBe(true);
    });

    test("Correo válido", () => {
        expect(validarCorreo("correo@dominio.com")).toBe(true);
    });

    test("Correo inválido", () => {
        expect(validarCorreo("correo@dominio")).toBe(false);
    });

    test("Fecha válida", () => {
        expect(validarFecha("2000-01-15")).toBe(true);
    });

    test("Fecha inválida", () => {
        expect(validarFecha("2000-15-01")).toBe(false);
    });

    test("Contraseña válida", () => {
        expect(validarContrasena("abc123")).toBe(true);
    });

    test("Contraseña vacía", () => {
        expect(validarContrasena("   ")).toBe(false);
    });
});
