import dotenv from 'dotenv';
dotenv.config();
import { exec } from 'child_process';

const API_URL = process.env.API_URL || "http://localhost";
const PORT=process.env.PORT || 4000;
const BASE_URL=`${API_URL}:${PORT}`

//FUNCIÓN CREAR ESTUDIANTES
export async function createStudent(studentData) {
  const url = `${BASE_URL}/students`;
  console.log(`📋 CREATE → POST ${url}`);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    });

    const data = await response.json();
    console.log("✅ Estudiante creado:", data);
    return data;
  } catch (error) {
    console.error("❌ Error al crear estudiante:", error);
  }
}


//FUNCIÓN LEER ESTUDIANTES
export async function readAllStudents() {
  const url = `${BASE_URL}/students`;
  console.log(`🔍 READ ALL → GET ${url}`);

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("✅ Lista de estudiantes:", data);
    return data;
  } catch (error) {
    console.error("❌ Error al leer estudiantes:", error);
  }
}


//FUNCIÓN PARA LEER ESTUDIANTES POR ID
export async function readStudentById(id) {
  const url = `${BASE_URL}/students/${id}`;
  console.log(`🔍 READ ONE → GET ${url}`);

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(`✅ Estudiante con ID ${id}:`, data);
    return data;
  } catch (error) {
    console.error(`❌ Error al leer estudiante ${id}:`, error);
  }
}




/*TEST FUNCIONES CRUD
createStudent({
  name: "Alumno nuevo",
  email: "alumno.nuevo@email.com",
  enrollmentDate: "2025-10-16",
  active: true,
  level: "beginner"
});
*/

//readAllStudents();

//readStudentById(3);