---
sidebar_position: 2
---

# Ejecutar tarea inmediatamente

Endpoint para executar una tarea inmediatamente.


<div class="flex">
<div class="post">POST</div>

<div class="url"> 
```bash
URL/execution_immediate
```
</div>
</div>

## Datos a enviar

```js title="Body (JSON)"
{
    "task_id": 2
}
```

## Respuesta obtenida

## Parametros

import TableDrago from "@site/src/components/table"; 

<TableDrago thead="Parametro, Tipo, Descripcion">
<tr>
    <td>task_id</td>
    <td>int</td>
    <td>ID de la tarea</td>
</tr>
</TableDrago>