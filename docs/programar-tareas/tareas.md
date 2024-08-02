---
sidebar_position: 1
---

# Agregar tarea

Endpoint para agregar una nueva tarea al scheduler.


<div class="flex">
<div class="post">POST</div>

<div class="url"> 
```bash
URL/monitor/tasks/add
```
</div>
</div>

## Datos a enviar

En este ejemplo se esta agregando una nueva tarea al scheduler, con el cron de ejecucion para cada minuto

```js title="Body (JSON)"
[
    {
        "task_name": "new_task",
        "priority_id": 1,
        "start_date": "2024-06-25",
        "end_date": "2024-06-27",
        "status": true,
        "type_id": 4,
        "command": "echo 'ejecuando cada minuto con exito'",
        "minute": "*",
        "hour": "*",
        "day_of_month": "*",
        "month": "*",
        "day_of_week": "*"
    }
]
```

## Respuesta obtenida

## Parametros

import TableFalconix from "@site/src/components/TableFalconix"; 

<TableFalconix thead="Parametro, Tipo, Descripcion">
<tr>
    <td>task_name</td>
    <td>string</td>
    <td>Nombre de la tarea</td>
</tr>
<tr>
    <td>priority_id</td>
    <td>int</td>
    <td>string</td>
</tr>
<tr>
    <td>start_date</td>
    <td>date</td>
    <td>Fecha de inicio de la tarea</td>
</tr>
<tr>
    <td>end_date</td>
    <td>date</td>
    <td>Fecha de fin de la tarea</td>
</tr>
<tr>
    <td>status</td>
    <td>boolean</td>
    <td>Estatus de la tarea</td>
</tr>
<tr>
    <td>type_id</td>
    <td>int</td>
    <td>string</td>
</tr>
<tr>
    <td>command</td>
    <td>string</td>
    <td>Comando a ejecutar</td>
</tr>
<tr>
    <td>minute</td>
    <td>string</td>
    <td>Minuto en **([formato crom](/docs/intro))**</td>

</tr>
<tr>
    <td>hour</td>
    <td>string</td>
    <td>Hora en **([formato crom](/docs/intro))**</td>
</tr>
<tr>
    <td>day_of_month</td>
    <td>string</td>
    <td>Dias del mes en **([formato crom](/docs/intro))**</td>
</tr>
<tr>
    <td>month</td>
    <td>string</td>
    <td>Mes en **([formato crom](/docs/intro))**</td>
</tr>
<tr>
    <td>day_of_week</td>
    <td>string</td>
    <td>Dias de la semana en **([formato crom](/docs/intro))**</td>
</tr>
</TableFalconix>