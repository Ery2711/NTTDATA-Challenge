# Ejercicio Backend - Pruebas de API con Karate

## Descripción del Proyecto

Este proyecto implementa pruebas automatizadas de API REST para operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de usuarios utilizando el framework Karate DSL. Las pruebas están diseñadas para validar la funcionalidad de una API de gestión de usuarios contra el servicio público [ServeRest](https://serverest.dev).

## Arquitectura del Proyecto

### Estructura de Directorios

```
EjercicioBackend/
├── pom.xml                           # Configuración Maven
├── src/
│   ├── main/
│   │   └── java/                     # Código fuente (vacío - proyecto de testing)
│   │       └── org/example/
│   └── test/
│       ├── resources/                 # Archivos de pruebas Karate (.feature)
│       │   ├── Support/              # Archivos de datos JSON
│       │   │   ├── usuario-post.json
│       │   │   └── usuario-update.json
│       │   │   └── usuario-get-params.json
│       │   └── Usuarios/             # Features organizados por entidad
│       │       ├── crear-user.feature
│       │       ├── actualizar-user.feature
│       │       ├── eliminar-user.feature
│       │       ├── obtener-lista-users.feature
│       │       └── obtener-usuario-id.feature
│       └── java/                     # Clases de test Java (vacío)
└── resources/                        # Recursos adicionales
```

## Tecnologías Utilizadas

- **Java 11**: Lenguaje de programación base
- **Maven**: Gestor de dependencias y construcción
- **Karate DSL**: Framework para pruebas de API
- **JUnit 5**: Framework de testing integrado con Karate
- **ServeRest API**: Servicio REST público para pruebas

## Dependencias Principales

```xml
<dependency>
    <groupId>com.intuit.karate</groupId>
    <artifactId>karate-junit5</artifactId>
    <version>1.2.0</version>
    <scope>test</scope>
</dependency>
```

## Configuración del Proyecto

### Propiedades de Maven

- **Java Source/Target**: 11
- **Encoding**: UTF-8
- **Build Resources**: Configurado para incluir archivos de test

### Configuración Karate

- **SSL**: Habilitado para conexiones HTTPS
- **Base URL**: `https://serverest.dev`
- **Logging**: Implementado con `print` statements para debugging

## Casos de Prueba Implementados

### 1. Crear Usuario (`crear-user.feature`)

**Descripción**: Valida la creación de nuevos usuarios con diferentes perfiles.

**Escenario Outline**:
- Crea usuarios con diferentes niveles de permisos (administrador/no administrador)
- Valida respuesta exitosa (status 200)
- Verifica que el nombre retornado coincida con el enviado

**Datos de Prueba**:
- TestUser con email aleatorio para evitar conflictos

### 2. Obtener Lista de Usuarios (`obtener-lista-users.feature`)

**Descripción**: Valida la obtención de todos los usuarios del sistema.

**Validaciones**:
- Status code 200
- Respuesta contiene datos no nulos y se verifica los formatos que sean correctos (Email y Admininstrador)
- Lista de usuarios tiene al menos un elemento
- Logging detallado de la respuesta completa

### 3. Obtener Usuario por ID (`obtener-usuario-id.feature`)

**Descripción**: Valida la obtención de un usuario específico por su identificador.

**Validaciones**:
- Status code 200
- Usuario retornado tiene nombre válido
- Logging de respuesta y status
- Uso de data de prueba inexistente y validacion del campo Id del endpoint

### 4. Actualizar Usuario (`actualizar-user.feature`)

**Descripción**: Valida la actualización de datos de un usuario existente.

**Datos de Actualización**:
- Nombre: "Fulano da Silva"
- Email: "beltrano@qa.com.br"
- Password: "teste"
- Administrador: true

**Validaciones**:
- Status code 200
- Logging de datos enviados y respuesta

### 5. Eliminar Usuario (`eliminar-user.feature`)

**Descripción**: Valida la eliminación de un usuario del sistema.

**Validaciones**:
- Status code 200
- Logging de respuesta y confirmación de eliminación

**Observación**:
- Para eliminar un usuario, se requiere un ID válido. Se recomienda crear un usuario de prueba y luego eliminarlo para asegurar la validez del ID.
- Por problemas de cache, se generaron 2 escenarios en uno (Eliminación y verificación)
## Patrón de Diseño: Separación de Datos

### Archivos JSON Independientes

Los datos de prueba están separados de los archivos feature en archivos JSON dedicados:

- **`usuario-post.json`**: Template para creación de usuarios con placeholders dinámicos
- **`usuario-update.json`**: Datos fijos para actualización de usuarios
- **`usuario-get-params.json`**: Datos fijos para obtención de información con parámetros válidos e inexistentes

**Ventajas**:
- Mantenibilidad: Cambios en datos no afectan lógica de pruebas
- Reutilización: Mismos datos pueden usarse en múltiples features
- Legibilidad: Features enfocados en lógica, no en datos

### Template con Placeholders

```json
{
  "nome": "#(nombre)",
  "email": "#(email)",
  "password": "#(password)",
  "administrador": "#(administrador)"
}
```

Los placeholders se resuelven dinámicamente desde los Examples en Scenario Outline.

## Validaciones Extra de Happy Path

### Estrategias de Validación Implementadas

1. **Validaciones Estructurales**:
   - Verificación de existencia de datos (`response.data != null`)
   - Validación de arrays no vacíos (`response.data.length > 0`)

2. **Validaciones de Contenido**:
   - Campos obligatorios presentes (`response.nome != null`)
   - Coincidencia de datos enviados vs. retornados

3. **Validaciones de Estado**:
   - Status codes correctos (200 para operaciones exitosas)
   - Estructura de respuesta consistente

### Logging Exhaustivo

Cada feature incluye logging detallado para facilitar debugging:

```gherkin
* print "Solicitud enviada:", requestUser
* print "Respuesta:", response
* print "Status code:", responseStatus
```

## Ejecución de Pruebas

### Requisitos Previos

1. **Java 11** o superior instalado
2. **Maven 3.6+** configurado

### Comandos de Ejecución

```bash
# Ejecutar todas las pruebas
mvn test

# Ejecutar con logs detallados
mvn test -e

# Ejecutar en modo debug
mvn test -X

# Ejecutar pruebas específicas
mvn test -Dtest="*karate*"
```

### Ejecución con Maven Wrapper

Si el proyecto incluye Maven Wrapper:

```bash
# Windows
./mvnw.cmd test

# Linux/Mac
./mvnw test
```

## Reportes de Ejecución

Karate genera reportes automáticamente en:
- `target/karate-reports/karate-summary.html`
- `target/surefire-reports/`

Los reportes incluyen:
- Resultados por feature
- Tiempos de ejecución
- Logs detallados
- Capturas de request/response

Se extrajo el folder de la última ejecución con todos los escenarios ejecutados y verificados. El archivo karate-summary.html se encuentra en la raíz del proyecto para facilitar su acceso y revisión.

## Mejores Prácticas Implementadas

### 1. Organización Modular
- Features separados por funcionalidad
- Datos de prueba externalizados
- Configuración centralizada en Background

### 2. Reutilización de Código
- Background común para configuración
- Templates JSON reutilizables
- Patrón de llamadas entre features (cuando sea necesario)

### 3. Logging y Debugging
- Logging consistente en todos los features
- Información clara de requests y responses
- Facilita troubleshooting

### 4. Validaciones Robusta
- Validaciones estructurales además de funcionales
- Manejo de casos edge
- Assertions claras y descriptivas

## API Endpoints Probados

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/usuarios` | POST | Crear nuevo usuario |
| `/usuarios` | GET | Obtener lista de usuarios |
| `/usuarios/{id}` | GET | Obtener usuario por ID |
| `/usuarios/{id}` | PUT | Actualizar usuario |
| `/usuarios/{id}` | DELETE | Eliminar usuario |

## Configuración de Ambiente

### Variables de Entorno

El proyecto está configurado para funcionar con la API pública de ServeRest. Para usar un ambiente diferente:

1. Modificar `baseUrl` en cada feature
2. Actualizar credenciales si es necesario
3. Ajustar paths de endpoints según la API destino

### SSL y Seguridad

- SSL habilitado por defecto (`karate.configure('ssl', true)`)
- Configurado para conexiones HTTPS seguras

## Mantenimiento y Escalabilidad

### Agregar Nuevos Casos de Prueba

1. Crear nuevo archivo `.feature` en `src/test/features/`
2. Seguir la estructura existente (Background + Scenarios)
3. Incluir logging consistente
4. Agregar datos de prueba en JSON si es necesario

### Modificar Datos de Prueba

1. Editar archivos JSON en `src/test/features/Support/`
2. Asegurar compatibilidad con templates existentes
3. Actualizar Examples en Scenario Outline si cambian campos

## Troubleshooting

### Problemas Comunes

1. **Error de conexión**: Verificar conectividad a internet y URL base
2. **SSL errors**: Confirmar configuración SSL habilitada
3. **Datos no encontrados**: Verificar IDs de usuarios existentes
4. **Encoding issues**: Asegurar UTF-8 en configuración Maven
5. Sesiones de cache no actualizadas: Se manejó 2 escenarios en uno solo

### Logs de Debugging

Los logs incluyen:
- Requests enviados
- Responses completas
- Status codes
- Conteo de elementos (para listas)
- Primer elemento de arrays

## Conclusión

Este proyecto demuestra una implementación completa de pruebas de API REST utilizando Karate DSL, con énfasis en:

- Separación clara de responsabilidades (datos vs lógica)
- Validaciones exhaustivas de happy path
- Logging detallado para debugging
- Estructura modular y mantenible
- Mejores prácticas de testing automatizado

El framework Karate permite escribir pruebas legibles y mantenibles, mientras que la separación de datos facilita la gestión de casos de prueba y su evolución independiente de la lógica de validación.
