import dotenv from 'dotenv';
dotenv.config();
import { exec } from 'child_process';

const API_URL = process.env.API_URL || "http://localhost";
const PORT=process.env.PORT || 4000;
const BASE_URL=`${API_URL}:${PORT}`

//FUNCION CREAR ESTUDIANTES
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







