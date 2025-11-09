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


//FUNCION PARA ACTUALIZAR UN ESTUDIANTE
export async function updateStudent(id, studentData) {
  const url = `${BASE_URL}/students/${id}`;
  console.log(`🔄 UPDATE → PUT ${url}`);

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    });

    const data = await response.json();
    console.log(`✅ Estudiante ${id} actualizado:`, data);
    return data;
  } catch (error) {
    console.error(`❌ Error al actualizar estudiante ${id}:`, error);
  }
}



// FUNCION PARA ACTUALIZAR UN ESTUDIANTE PARCIALMENTE
export async function patchStudent(id, partialData) {
  const url = `${BASE_URL}/students/${id}`;
  console.log(`✏️ PATCH → PATCH ${url}`);

  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(partialData),
    });

    const data = await response.json();
    console.log(`✅ Estudiante ${id} actualizado parcialmente:`, data);
    return data;
  } catch (error) {
    console.error(`❌ Error al hacer PATCH de estudiante ${id}:`, error);
  }
}



//FUNCIÓN PARA ELIMINAR ESTUDIANTES
export async function deleteStudent(id) {
  const url = `${BASE_URL}/students/${id}`;
  console.log(`🗑️ DELETE → DELETE ${url}`);

  try {
    const response = await fetch(url, { method: "DELETE" });

    if (response.ok) {
      console.log(`✅ Estudiante ${id} eliminado correctamente`);
    } else {
      console.error(`❌ Error al eliminar estudiante ${id}:`, response.status);
    }
  } catch (error) {
    console.error(`❌ Error al eliminar estudiante ${id}:`, error);
  }
}





//TEST FUNCIONES CRUD
/*
createStudent({
  name: "Alumno nuevo",
  email: "alumno.nuevo@email.com",
  enrollmentDate: "2025-10-16",
  active: true,
  level: "beginner"
});*/


//readAllStudents();

//readStudentById(3);

/*updateStudent(2, {
    id: 2,
    name: "Alumno Actualizado",
    email: "alumno.actualizado@email.com",
    enrollmentDate: "2025-10-16",
    active: true,
    level: "intermediate",
});*/


//patchStudent(1, { active: false });

//deleteStudent("74bd");