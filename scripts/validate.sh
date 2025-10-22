#!/bin/bash

# ===============================================
# Script de Validación del Proyecto API de Pájaros
# Solo muestra errores y el resumen final de fallos.
# ===============================================

# Variables de contador
PASS_COUNT=0
FAIL_COUNT=0
TOTAL_CHECKS=0

# Función auxiliar para realizar la validación de existencia de archivos o directorios
check_existence() {
    local FILE_PATH=$1
    local DESCRIPTION=$2
    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))

    if [ -e "$FILE_PATH" ]; then
        # Pasa: No imprimir nada
        PASS_COUNT=$((PASS_COUNT + 1))
    else
        # Falla: Imprimir un mensaje simple
        echo "FAIL: $DESCRIPTION ($FILE_PATH) - No encontrado."
        FAIL_COUNT=$((FAIL_COUNT + 1))
    fi
}

# Función auxiliar para validar contenido específico en package.json
check_package_content() {
    local PATTERN=$1
    local DESCRIPTION=$2
    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))

    if [ ! -f "package.json" ]; then
        echo "FAIL: $DESCRIPTION - package.json no existe. Chequeo saltado."
        FAIL_COUNT=$((FAIL_COUNT + 1))
        return
    fi

    # Usamos grep para buscar el patrón dentro de package.json.
    if grep -q "$PATTERN" package.json; then
        # Pasa: No imprimir nada
        PASS_COUNT=$((PASS_COUNT + 1))
    else
        # Falla: Imprimir un mensaje simple
        echo "FAIL: $DESCRIPTION - Patrón NO encontrado: '$PATTERN' en package.json."
        FAIL_COUNT=$((FAIL_COUNT + 1))
    fi
}

echo "--- Iniciando Validación de Archivos y Configuración ---"

# --- 1. CHEQUEOS DE EXISTENCIA DE ARCHIVOS Y CARPETAS ---
check_existence "package.json" "Existencia de package.json"
check_existence "src/db/db.json" "Existencia de src/db/db.json"
check_existence ".gitignore" "Existencia de .gitignore"
check_existence ".env.example" "Existencia de .env.example"
check_existence "README.md" "Existencia de README.md"
check_existence "checklist.md" "Existencia de checklist.md"
check_existence "src/peticiones-crud.http" "Existencia de peticiones-crud.http"
check_existence "src/" "Existencia de carpeta src/"
check_existence "src/crud-curl.js" "Existencia de src/crud-curl.js"
check_existence "images/" "Existencia de carpeta images/"
check_existence "scripts/" "Existencia de carpeta scripts/"

# --- 2. CHEQUEOS DE CONTENIDO EN package.json ---
check_package_content '"type": "module"' "Verificar 'type': 'module'"
check_package_content '"dotenv":' "Verificar dependencia 'dotenv' instalada"
check_package_content '"json-server":' "Verificar dependencia 'json-server' instalada"
check_package_content '"server:up":' "Verificar script 'server:up'"
check_package_content '"crud:curl":' "Verificar script 'crud:curl'"

# --- 3. CHEQUEO DE CANTIDAD DE CAPTURAS DE IMAGEN (REQUISITO MÍNIMO 12) ---
TOTAL_CHECKS=$((TOTAL_CHECKS + 1))

IMAGE_COUNT=0
if [ -d "images/" ]; then
    # Cuenta archivos comunes de imagen (png, jpg, jpeg) en la carpeta images/ y subcarpetas
    IMAGE_COUNT=$(find images/ -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) | wc -l)
    IMAGE_COUNT=$(echo $IMAGE_COUNT | xargs)

    # REQUISITO ACTUALIZADO: Debe haber al menos 12 imágenes (2 por cada tipo de petición REST x 6 tipos)
    if [ "$IMAGE_COUNT" -ge 12 ]; then
        # Pasa: No imprimir nada
        PASS_COUNT=$((PASS_COUNT + 1))
    else
        echo "FAIL: Cantidad de imágenes (capturas) - Solo se encontraron $IMAGE_COUNT (se requieren mínimo 12)."
        FAIL_COUNT=$((FAIL_COUNT + 1))
    fi
else
    echo "FAIL: Chequeo de imágenes - Carpeta 'images/' no existe. Chequeo fallido."
    FAIL_COUNT=$((FAIL_COUNT + 1))
fi

echo ""

# ====================
# RESUMEN DE VALIDACIÓN
# ====================

if [ "$FAIL_COUNT" -eq 0 ]; then
    echo "VALIDACION EXITOSA. Todos los $TOTAL_CHECKS chequeos han pasado."
    exit 0 # Código de salida 0 para éxito
else
    echo "========================================================"
    echo "RESUMEN: VALIDACION FALLIDA. $FAIL_COUNT chequeos fallaron de un total de $TOTAL_CHECKS."
    echo "========================================================"
    exit 1 # Código de salida 1 para fallo
fi
