// ============================================================================
//  guion.js -- Clase asincrónica: Semana 10 (coeficientes indeterminados),
//  del Ejemplo 3 en adelante. Cada página del PDF = un overlay = un paso.
//  Editar aquí el texto de la narración y las preguntas; el reproductor
//  (index.html) no necesita cambios.
//
//  Audio: si existe audio/p-NNN.mp3 (tres dígitos, junto a este archivo) se
//  reproduce; si no, se usa la síntesis de voz del navegador.
//  Pregunta: "despues" = la pregunta aparece al llegar a esa página y hay que
//  responderla (o saltarla) antes de pasar a la siguiente. Cada pregunta va
//  ANTES de que la diapositiva siguiente muestre la respuesta.
//  Lectura de símbolos para la voz: ye = y, equis = x, doble ve = w, pe = p.
// ============================================================================
window.MODULO = {
  titulo: "Semana 10 · Coeficientes indeterminados (del Ejemplo 3 en adelante)",
  curso: "Introducción a las Ecuaciones Diferenciales Ordinarias · UdeA · 2026-II",
  frames: [
    { nombre: "Portada", desde: 1, hasta: 1 },
    { nombre: "Ejemplo 3 (I)", desde: 2, hasta: 5 },
    { nombre: "Ejemplo 3 (II)", desde: 6, hasta: 9 },
    { nombre: "Sección: cuando la prueba falla", desde: 10, hasta: 10 },
    { nombre: "Ejemplo 4 (I)", desde: 11, hasta: 16 },
    { nombre: "Ejemplo 4 (II): la causa y el remedio", desde: 17, hasta: 19 },
    { nombre: "¿De dónde sale la x? La resonancia", desde: 20, hasta: 24 },
    { nombre: "La regla de multiplicidad", desde: 25, hasta: 31 },
    { nombre: "Ejemplo 5 (I)", desde: 32, hasta: 36 },
    { nombre: "Ejemplo 5 (II)", desde: 37, hasta: 41 },
    { nombre: "Ejemplo 6", desde: 42, hasta: 50 },
    { nombre: "Ejemplo 7", desde: 51, hasta: 60 },
    { nombre: "Ejemplo 8 (I)", desde: 61, hasta: 63 },
    { nombre: "Ejemplo 8 (II)", desde: 64, hasta: 67 },
    { nombre: "Teorema (coeficientes indeterminados)", desde: 68, hasta: 69 },
    { nombre: "Teorema: observaciones", desde: 70, hasta: 75 },
    { nombre: "Sección: sumas y conexiones", desde: 76, hasta: 76 },
    { nombre: "Principio de superposición", desde: 77, hasta: 80 },
    { nombre: "Ejemplo 9 (I)", desde: 81, hasta: 86 },
    { nombre: "Ejemplo 9 (II)", desde: 87, hasta: 91 },
    { nombre: "Conexión: Cauchy–Euler", desde: 92, hasta: 97 },
    { nombre: "Errores frecuentes", desde: 98, hasta: 105 },
    { nombre: "Coeficientes indeterminados frente a variación de parámetros", desde: 106, hasta: 111 },
    { nombre: "Sección: recapitulación", desde: 112, hasta: 112 },
    { nombre: "Infografía de repaso (1/2)", desde: 113, hasta: 119 },
    { nombre: "Infografía de repaso (2/2)", desde: 120, hasta: 125 },
    { nombre: "El mapa de la unidad", desde: 126, hasta: 127 },
    { nombre: "Recapitulación", desde: 128, hasta: 135 },
    { nombre: "Sección: problemas y soluciones", desde: 136, hasta: 136 },
    { nombre: "Cómo usar esta sección", desde: 137, hasta: 141 },
    { nombre: "Nivel 1 (sección)", desde: 142, hasta: 142 },
    { nombre: "Nivel 1: enunciados", desde: 143, hasta: 144 },
    { nombre: "Nivel 1: soluciones", desde: 145, hasta: 155 },
    { nombre: "Nivel 2 (sección)", desde: 156, hasta: 156 },
    { nombre: "Nivel 2: enunciados", desde: 157, hasta: 159 },
    { nombre: "Problema 2.1", desde: 160, hasta: 164 },
    { nombre: "Problema 2.2", desde: 165, hasta: 169 },
    { nombre: "Problema 2.3", desde: 170, hasta: 174 },
    { nombre: "Problemas 2.4 y 2.5", desde: 175, hasta: 180 },
    { nombre: "Problema 2.6", desde: 181, hasta: 186 },
    { nombre: "Nivel 3 (sección)", desde: 187, hasta: 187 },
    { nombre: "Nivel 3: enunciados", desde: 188, hasta: 188 },
    { nombre: "Solución 3.1", desde: 189, hasta: 192 },
    { nombre: "Solución 3.2", desde: 193, hasta: 197 },
    { nombre: "Solución 3.3 (I)", desde: 198, hasta: 201 },
    { nombre: "Solución 3.3 (II)", desde: 202, hasta: 205 },
    { nombre: "Solución 3.4", desde: 206, hasta: 209 },
    { nombre: "Solución 3.5", desde: 210, hasta: 214 },
    { nombre: "Referencias", desde: 215, hasta: 215 }
  ],
  // narracion[k] corresponde a la página k+1 (slides/p-NNN.png)
  narracion: [
    // 1-1 -- Portada
    "Bienvenidos a la clase asincrónica de la Semana diez: coeficientes indeterminados. Esta parte retoma desde el Ejemplo tres, así que si todavía no has visto los ejemplos uno y dos, repásalos primero, porque aquí usamos la tabla de funciones de prueba. En cada página aparece algo nuevo; avanza con la flecha o con el modo continuo. En varios puntos habrá una pregunta corta, justo antes de que la diapositiva muestre la respuesta.",
    // 2-5 -- Ejemplo 3 (I)
    "Ejemplo tres: ye doble prima más dos ye prima menos tres ye igual a veinte por e a la equis por coseno de dos equis. Arriba está la ruta de cuatro pasos que seguiremos en todos los ejemplos: la homogénea, la función de prueba, los coeficientes y la solución general.",
    "Paso uno. El polinomio característico es erre cuadrado más dos erre menos tres, que factoriza como erre más tres por erre menos uno. Las raíces son uno y menos tres, y la solución complementaria es ce uno e a la equis más ce dos e a la menos tres equis. Antes de seguir, piensa qué forma debe tener la solución particular, y responde la pregunta.",
    "Paso dos. En el lado derecho aparece lambda igual a uno más o menos dos i. La pregunta clave es si lambda es raíz del polinomio característico. Evaluamos: pe de uno más dos i es menos cuatro más ocho i, que no es cero. Entonces s vale cero, y la tabla, con el producto de e a la equis por coseno, da ye pe igual a e a la equis por A coseno de dos equis más B seno de dos equis.",
    "Cuidado con este error frecuente: aunque g solo tenga coseno de dos equis, la prueba lleva coseno y seno. Al derivar, el coseno produce seno y el seno produce coseno, así que necesitamos los dos.",
    // 6-9 -- Ejemplo 3 (II)
    "Paso tres, los coeficientes. Derivamos la prueba dos veces. La primera derivada es e a la equis por A más dos B, por coseno de dos equis, más B menos dos A, por seno de dos equis. La segunda es e a la equis por menos tres A más cuatro B, por coseno de dos equis, más menos cuatro A menos tres B, por seno de dos equis.",
    "Sustituimos en ye doble prima más dos ye prima menos tres ye y agrupamos coseno y seno. Queda e a la equis por ocho B menos cuatro A, por coseno de dos equis, menos cuatro B más ocho A, por seno de dos equis, y eso debe ser igual a veinte e a la equis coseno de dos equis, más cero por seno de dos equis. Igualando coeficientes sale un sistema de dos ecuaciones. Antes de ver la solución, resuélvelo tú y responde la pregunta.",
    "Igualamos coeficientes: menos cuatro A más ocho B igual a veinte, y menos ocho A menos cuatro B igual a cero. Dividiendo entre cuatro: menos A más dos B igual a cinco, y dos A más B igual a cero. De la segunda, B es menos dos A, y al sustituir resulta A igual a menos uno y B igual a dos.",
    "Paso cuatro, la solución general: ce uno e a la equis más ce dos e a la menos tres equis, más e a la equis por menos coseno de dos equis más dos seno de dos equis. Observa que aquí la parte real de lambda, que es uno, coincide con una raíz de la homogénea, pero lambda no es raíz; por eso no hubo resonancia.",
    // 10-10 -- Sección: cuando la prueba falla
    "Hasta ahora la función de prueba de la tabla siempre funcionó. ¿Qué ocurre cuando la prueba ya es solución de la homogénea? Eso se llama resonancia, y es lo que veremos en esta sección.",
    // 11-16 -- Ejemplo 4 (I)
    "Ejemplo cuatro: ye doble prima más tres ye prima menos cuatro ye igual a dos e a la equis. Se parece al ejemplo anterior, pero trae una sorpresa.",
    "Paso uno. Erre cuadrado más tres erre menos cuatro es erre más cuatro por erre menos uno. Las raíces son menos cuatro y uno, así que ye ce es ce uno e a la menos cuatro equis más ce dos e a la equis.",
    "Paso dos. Para g igual a dos e a la equis proponemos, siguiendo la tabla, ye pe igual a A e a la equis. Hay que determinar A.",
    "Paso tres. La primera y la segunda derivada de A e a la equis son ambas A e a la equis. Al sustituir, A e a la equis más tres A e a la equis menos cuatro A e a la equis debe ser igual a dos e a la equis.",
    "Pero la suma del lado izquierdo es uno más tres menos cuatro, o sea cero, y queda cero igual a dos e a la equis: un absurdo. No hay ningún valor de A que funcione.",
    "¿Qué falló? Piensa un momento y responde la pregunta antes de seguir.",
    // 17-19 -- Ejemplo 4 (II): la causa y el remedio
    "La causa: e a la equis ya es solución de la homogénea; está en ye ce. Por eso el operador aplicado a A e a la equis da cero, para cualquier A, y nunca podrá igualar dos e a la equis.",
    "El remedio es probar una función un grado más alta: ye pe igual a A equis e a la equis. Derivando, ye pe prima es A por equis más uno, por e a la equis, y ye pe doble prima es A por equis más dos, por e a la equis. Al sustituir, los términos con equis se cancelan y queda cinco A igual a dos, de modo que A es dos quintos.",
    "Podríamos haber propuesto A equis más B, por e a la equis, y también funcionaría, pero B e a la equis ya está en ye ce, no aporta nada y B queda libre. Basta A equis e a la equis. La solución general es ce uno e a la menos cuatro equis más ce dos e a la equis, más dos quintos equis e a la equis.",
    // 20-24 -- ¿De dónde sale la x? La resonancia
    "¿De dónde sale esa equis? Miremos un oscilador: ye doble prima más cuatro ye igual a coseno de omega equis, con condiciones iniciales cero. A la derecha hay dos soluciones, una acotada y otra que crece; enseguida veremos cuál es cuál.",
    "Si omega es distinto de dos, derivando se verifica que la solución es coseno de omega equis menos coseno de dos equis, todo dividido entre cuatro menos omega cuadrado.",
    "Cuando omega tiende a dos, el numerador y el denominador tienden a cero. Aplicando la regla de L'Hôpital respecto de omega, con equis fija, el límite es equis sobre cuatro por seno de dos equis, la curva roja de la gráfica.",
    "Esa función resuelve ye doble prima más cuatro ye igual a coseno de dos equis. El factor equis es la huella de dos soluciones, coseno de omega equis y coseno de dos equis, que se funden cuando omega se acerca a dos.",
    "En física: forzar un oscilador a su frecuencia natural hace crecer la amplitud linealmente. En ecuaciones diferenciales: cuando g coincide con una solución de la homogénea, la solución particular lleva un factor equis a la s.",
    // 25-31 -- La regla de multiplicidad
    "Con esto podemos enunciar la regla práctica: si algún término de la prueba es solución de la homogénea, se multiplica la prueba por equis a la s, donde s es el menor entero positivo para el cual ningún término de equis a la s por ye pe resuelve la homogénea. Es equivalente a decir que s es la multiplicidad de lambda, igual a alfa más i beta, como raíz del polinomio característico.",
    "Lo vemos en una tabla, para g igual a e a la lambda equis. Las filas dependen de cuántas veces lambda es raíz del polinomio característico.",
    "Si lambda no es raíz, s es cero y la prueba es A e a la lambda equis.",
    "Si es raíz simple, s es uno y la prueba es A equis e a la lambda equis. Ahora te toca: responde qué pasa si la raíz es doble.",
    "Si es raíz doble, s es dos y la prueba es A equis cuadrado e a la lambda equis.",
    "En general, si lambda tiene multiplicidad k, la prueba es A equis a la k, por e a la lambda equis.",
    "Una alerta de rigor: multiplicar una sola vez por equis no basta si lambda es raíz doble. Por ejemplo, ye doble prima menos cuatro ye prima más cuatro ye igual a seis e a la dos equis exige equis cuadrado. Cuántas veces es raíz lambda se lee en ye ce: cuántas de las funciones e a la lambda equis, equis e a la lambda equis, y así sucesivamente, aparecen.",
    // 32-36 -- Ejemplo 5 (I)
    "Ejemplo cinco: ye doble prima más tres ye prima menos cuatro ye igual a menos dos e a la menos cuatro equis. Es el mismo operador del ejemplo anterior, con otro lado derecho.",
    "Paso uno. Las raíces siguen siendo menos cuatro y uno, así que ye ce es ce uno e a la menos cuatro equis más ce dos e a la equis.",
    "Paso dos. Naturalmente uno pensaría en A e a la menos cuatro equis, por el lado derecho. Pero, ¿será buena idea? Responde la pregunta antes de seguir.",
    "No lo es: g es solución de la homogénea, porque e a la menos cuatro equis está en ye ce. Entonces lambda igual a menos cuatro es raíz simple del polinomio característico y s vale uno.",
    "Se supone entonces ye pe igual a A equis e a la menos cuatro equis.",
    // 37-41 -- Ejemplo 5 (II)
    "Paso tres. Con ye pe igual a A equis e a la menos cuatro equis, la primera derivada es e a la menos cuatro equis por menos cuatro A equis más A, y la segunda es e a la menos cuatro equis por dieciséis A equis menos ocho A.",
    "Sustituimos en ye doble prima más tres ye prima menos cuatro ye. El coeficiente de A equis es dieciséis menos doce menos cuatro, o sea cero, y el término constante es menos ocho más tres, o sea menos cinco. Queda menos cinco A e a la menos cuatro equis igual a menos dos e a la menos cuatro equis.",
    "Luego A es dos quintos. Como control: pe prima de menos cuatro vale menos cinco, y A es menos dos dividido entre pe prima de menos cuatro. Esa fórmula la demostraremos en el problema tres punto uno.",
    "La solución general es ce uno e a la menos cuatro equis más ce dos e a la equis, más dos quintos equis e a la menos cuatro equis.",
    "Observa que el coeficiente de equis se anuló: dieciséis menos doce menos cuatro es cero, porque pe de menos cuatro es cero. Si en tus cuentas no se anula, hay un error de derivación.",
    // 42-50 -- Ejemplo 6
    "Ejemplo seis: ye doble prima igual a menos cuatro equis. La homogénea es ye doble prima igual a cero, así que ye ce es ce uno más ce dos equis, y lambda igual a cero es raíz doble de pe de erre igual a erre cuadrado. Para g igual a menos cuatro equis la tabla diría A equis más B, pero ambos términos están en ye ce. Probemos varias pruebas, en una tabla.",
    "Primera prueba: A equis más B. Su segunda derivada es cero, y cero no es igual a menos cuatro equis.",
    "No sirve: ambos términos resuelven ye doble prima igual a cero.",
    "Segunda prueba: A equis cuadrado más B equis. La segunda derivada es dos A, que tampoco puede igualar menos cuatro equis.",
    "No sirve: B equis está en ye ce, y A equis cuadrado solo produce constantes.",
    "Tercera prueba: A equis cubo más B equis cuadrado. La segunda derivada es seis A equis más dos B, y eso sí puede igualar a menos cuatro equis.",
    "Sí sirve: es equis cuadrado por A equis más B, o sea s igual a dos. Calcula los coeficientes y responde la pregunta.",
    "Los coeficientes: seis A igual a menos cuatro y dos B igual a cero, de modo que A es menos dos tercios y B es cero. La solución general es ce uno más ce dos equis menos dos tercios equis al cubo.",
    "Es lo que se espera: ye doble prima igual a menos cuatro equis se resuelve integrando dos veces. Primero ye prima es menos dos equis cuadrado más ce dos, y luego ye es menos dos tercios equis al cubo más ce dos equis más ce uno. El método debe dar lo mismo, y lo da.",
    // 51-60 -- Ejemplo 7
    "Ejemplo siete: ye doble prima menos cuatro ye prima más cuatro ye igual a seis e a la dos equis. Paso uno: erre cuadrado menos cuatro erre más cuatro es erre menos dos al cuadrado. La raíz es dos, doble, y ye ce es ce uno e a la dos equis más ce dos equis e a la dos equis.",
    "Paso dos. El lado derecho tiene lambda igual a dos, que es raíz doble: s es dos. Veamos qué pasa con cada intento. Primero, ye pe igual a A e a la dos equis.",
    "No sirve: e a la dos equis está en ye ce, y el operador aplicado a A e a la dos equis es pe de dos por A e a la dos equis, que vale cero.",
    "Segundo intento: ye pe igual a A equis e a la dos equis.",
    "Tampoco sirve: equis e a la dos equis también está en ye ce, por ser raíz doble. El operador da pe de dos por equis más pe prima de dos, todo por A e a la dos equis, y ambos son cero.",
    "Tercer intento: ye pe igual a A equis cuadrado e a la dos equis. Para decidir si sirve, calcula el operador aplicado a esa función y responde la pregunta.",
    "Sí sirve. El operador da pe de dos por equis cuadrado, más dos pe prima de dos por equis, más pe doble prima de dos, todo por A e a la dos equis, y como los dos primeros son cero queda dos A e a la dos equis.",
    "Paso tres: dos A e a la dos equis igual a seis e a la dos equis, así que A es tres.",
    "Paso cuatro: la solución general es ce uno e a la dos equis más ce dos equis e a la dos equis, más tres equis cuadrado e a la dos equis.",
    "Observa que pe de erre es erre menos dos al cuadrado, por lo que pe de dos y pe prima de dos son cero, y pe doble prima de dos es dos. Un equis más se gasta por cada derivada de pe que se anula.",
    // 61-63 -- Ejemplo 8 (I)
    "Ejemplo ocho: ye doble prima más dos ye prima más cinco ye igual a cuatro e a la menos equis, por coseno de dos equis menos dos seno de dos equis. Paso uno: erre cuadrado más dos erre más cinco igual a cero da erre igual a menos uno más o menos dos i, y ye ce es e a la menos equis por ce uno coseno de dos equis más ce dos seno de dos equis. Ahora, ¿qué valor tiene s para lambda igual a menos uno más dos i? Responde la pregunta.",
    "Paso dos. g tiene lambda igual a menos uno más dos i, que es raíz simple de pe: las raíces son menos uno más o menos dos i. Entonces s es uno. Ahora g hace parte de ye ce, y la prueba es e a la menos equis por A equis coseno de dos equis más B equis seno de dos equis.",
    "Observa que la equis multiplica a ambos, equis coseno y equis seno. Y aunque g tuviera solo uno de los dos, habría hecho falta el par completo.",
    // 64-67 -- Ejemplo 8 (II)
    "Paso tres. Derivamos dos veces; los términos con equis aparecen en rojo. Al sustituir en ye doble prima más dos ye prima más cinco ye, esos términos se cancelan, y queda e a la menos equis por cuatro B coseno de dos equis menos cuatro A seno de dos equis. Eso debe igualar a g. ¿Cuánto valen A y B? Responde la pregunta.",
    "Los términos con equis se cancelan porque pe de lambda es cero. Queda e a la menos equis por cuatro B coseno de dos equis menos cuatro A seno de dos equis, igual a cuatro e a la menos equis coseno de dos equis menos ocho e a la menos equis seno de dos equis. Entonces B es uno y A es dos.",
    "La solución general es e a la menos equis por ce uno coseno de dos equis más ce dos seno de dos equis, más equis e a la menos equis por dos coseno de dos equis más seno de dos equis.",
    "Si en la última línea no se cancelan los términos con equis, hay un error de derivación.",
    // 68-69 -- Teorema (coeficientes indeterminados)
    "Ya podemos enunciar el teorema. Sea L un operador lineal con coeficientes constantes reales y polinomio característico pe, y sea g igual a e a la alfa equis por P de equis coseno de beta equis más Q de equis seno de beta equis, con P y Q polinomios reales. Sea m el mayor de los dos grados. Sea lambda igual a alfa más i beta, y sea s la multiplicidad de lambda como raíz de pe; s es cero si pe de lambda no es cero.",
    "La conclusión: la ecuación L de ye igual a g tiene una solución particular de la forma equis a la s, por e a la alfa equis, por R de equis coseno de beta equis más S de equis seno de beta equis, con R y S polinomios reales de grado a lo sumo m.",
    // 70-75 -- Teorema: observaciones
    "Primera observación: se usa el par completo, coseno y seno, aunque g tenga solo uno, y todos los términos hasta el grado m en R y en S.",
    "Segunda: si g es una suma de funciones de esa forma, la solución particular es la suma de las soluciones particulares, por la linealidad de L, y cada sumando con su propio s.",
    "Tercera: s es el número exacto de veces que lambda es raíz, no solo cero o uno, como mostró el Ejemplo siete.",
    "Cuarta: si s es cero, el teorema es la tabla de funciones de prueba, que usamos en los ejemplos uno a tres. Si s es al menos uno, lambda coincide con una raíz de pe y hay resonancia, como en los ejemplos cuatro a ocho.",
    "Quinta: el teorema asegura que existe una solución particular de esa forma; los coeficientes se determinan resolviendo un sistema lineal, que se resuelve de arriba hacia abajo, como en el Ejemplo dos.",
    "Y una alerta de rigor: si lambda igual a alfa más i beta es raíz compleja de pe, su conjugada también lo es, con la misma multiplicidad. Por eso un solo s sirve para el par coseno y seno.",
    // 76-76 -- Sección: sumas y conexiones
    "Ahora vemos qué hacer cuando g es una suma, y algunas conexiones con otros temas de la unidad.",
    // 77-80 -- Principio de superposición
    "El principio de superposición: si L de ye uno es g uno y L de ye dos es g dos, entonces, para constantes a y b, L de a ye uno más b ye dos es a g uno más b g dos.",
    "La demostración es la linealidad de L: L de a ye uno más b ye dos es a por L de ye uno, más b por L de ye dos, que es a g uno más b g dos.",
    "En un diagrama: resolvemos L de ye igual a g uno, con su propio s uno; resolvemos L de ye igual a g dos, con su propio s dos; y la solución particular de la suma es la suma de las dos.",
    "Cuidado: cada sumando tiene su propio s. No se multiplica toda la prueba por equis a la s, sino solo los términos del sumando que entra en resonancia.",
    // 81-86 -- Ejemplo 9 (I)
    "Ejemplo nueve: ye doble prima menos dos ye prima más ye igual a e a la equis más equis. Usaremos de nuevo la ruta de cuatro pasos.",
    "Paso uno: erre cuadrado menos dos erre más uno es erre menos uno al cuadrado. La raíz uno es doble, y ye ce es ce uno e a la equis más ce dos equis e a la equis.",
    "Paso dos. g es la suma de g uno igual a e a la equis y g dos igual a equis. Cada uno necesita su propio s. ¿Qué forma tiene la solución particular? Responde la pregunta.",
    "Para g uno, e a la equis: lambda igual a uno es raíz doble, s es dos, y la prueba es A equis cuadrado e a la equis.",
    "Para g dos, equis: lambda igual a cero no es raíz, porque pe de cero es uno, así que s es cero y la prueba es B equis más C.",
    "Son dos problemas independientes: L de ye pe uno igual a e a la equis, y L de ye pe dos igual a equis. Se resuelven por separado y se suman.",
    // 87-91 -- Ejemplo 9 (II)
    "Paso tres, parte a. Derivamos A equis cuadrado e a la equis: la primera derivada es A por equis cuadrado más dos equis, por e a la equis, y la segunda es A por equis cuadrado más cuatro equis más dos, por e a la equis.",
    "Al sustituir, los términos en equis cuadrado y en equis se cancelan y queda dos A e a la equis igual a e a la equis; entonces A es un medio.",
    "Parte b: para B equis más C, la primera derivada es B y la segunda es cero, así que el operador da menos dos B más B equis más C, que debe ser igual a equis. Luego B es uno y C es dos.",
    "Paso cuatro, la solución general: ce uno e a la equis más ce dos equis e a la equis, que es ye ce; más un medio equis cuadrado e a la equis, que es ye pe uno; más equis más dos, que es ye pe dos.",
    "Control: el operador aplicado a un medio equis cuadrado e a la equis da e a la equis, y aplicado a equis más dos da menos dos más equis más dos, o sea equis. Luego L de ye pe es e a la equis más equis, como queríamos.",
    // 92-97 -- Conexión: Cauchy–Euler
    "Conexión con Cauchy–Euler. Retomamos equis cuadrado ye doble prima menos equis ye prima más ye igual a dos equis, con equis positiva, que resolvimos por variación de parámetros en el Ejemplo tres de la Semana nueve.",
    "Hacemos el cambio equis igual a e a la te, y doble ve de te igual a ye de e a la te. Entonces equis ye prima es doble ve sub te, y equis cuadrado ye doble prima es doble ve sub te te menos doble ve sub te. La ecuación queda con coeficientes constantes: doble ve sub te te, menos dos doble ve sub te, más doble ve, igual a dos e a la te. Antes de seguir, ¿cuánto vale s? Responde la pregunta.",
    "Hay resonancia doble: pe de erre es erre menos uno al cuadrado y lambda es uno, así que s es dos y doble ve pe es A te cuadrado e a la te. Como el operador aplicado a te cuadrado e a la te da dos e a la te, A es uno.",
    "Deshacemos el cambio, con te igual al logaritmo de equis y e a la te igual a equis: ye pe es equis por logaritmo de equis al cuadrado, y la solución general es ce uno equis más ce dos equis logaritmo de equis, más equis por logaritmo de equis al cuadrado, para equis positiva.",
    "Coincide con lo obtenido por variación de parámetros, sin calcular wronskianos ni integrales.",
    "Una alerta de rigor: el cambio equis igual a e a la te solo vale para equis positiva; para equis negativa se usa equis igual a menos e a la te. Y g debe volverse, en la variable te, una función de la familia de funciones de prueba. Aquí dos equis es dos e a la te. Para g igual al logaritmo de equis resulta g igual a te, un polinomio, y también sirve.",
    // 98-105 -- Errores frecuentes
    "Revisemos los errores más frecuentes al usar coeficientes indeterminados.",
    "Primero: omitir términos de menor grado. Para g igual a equis cuadrado la prueba es A equis cuadrado más B equis más C, no solo A equis cuadrado.",
    "Segundo: usar solo coseno o solo seno. Hacen falta ambos.",
    "Tercero: no comparar con ye ce. Hay que hallar ye ce antes; sin él no se ve la resonancia.",
    "Cuarto: multiplicar por equis de menos. Una raíz doble exige equis cuadrado, como en ye doble prima menos cuatro ye prima más cuatro ye igual a seis e a la dos equis, no solo equis.",
    "Quinto: multiplicar toda la prueba por equis en una suma. Cada sumando tiene su propio s, como en el Ejemplo nueve.",
    "Sexto: aplicar el método a tangente de equis, secante de equis, uno sobre equis y funciones parecidas. No cierran bajo derivación, y para ellas se usa variación de parámetros.",
    "Séptimo: olvidar que L debe tener coeficientes constantes. En una ecuación de Cauchy–Euler, primero se hace equis igual a e a la te.",
    // 106-111 -- Coeficientes indeterminados frente a variación de parámetros
    "Comparemos los dos métodos que tenemos para la solución particular: coeficientes indeterminados, el de esta semana, y variación de parámetros, el de la Semana nueve.",
    "Aplica a: coeficientes indeterminados exige coeficientes constantes y que g esté en la familia de polinomios, exponenciales, senos, cosenos, y sus productos y sumas. Variación de parámetros también sirve con coeficientes variables, y g puede ser cualquier función continua.",
    "Qué necesita: el primero, el polinomio característico y sus raíces, para calcular s. El segundo, una base de soluciones, ye uno hasta ye ene, de la homogénea.",
    "Operaciones: el primero deriva y resuelve un sistema lineal, triangular. El segundo calcula el wronskiano y sus determinantes, e integra. Ahora una pregunta: para ye doble prima más ye igual a secante de equis, ¿qué método usarías? Responde la pregunta.",
    "Un ejemplo de cada uno: ye doble prima más ye igual a equis cuadrado, para coeficientes indeterminados, y ye doble prima más ye igual a secante de equis, para variación de parámetros.",
    "Si ambos aplican, dan la misma ye, salvo constantes; con g en la familia y coeficientes constantes, el primero suele ser más corto.",
    // 112-112 -- Sección: recapitulación
    "Cerramos la parte de contenido con una recapitulación: dos láminas de infografía, un mapa de la unidad y un resumen.",
    // 113-119 -- Infografía de repaso (1/2)
    "Infografía de repaso. Recorremos los cuatro pasos del procedimiento sobre el Ejemplo nueve. Paso uno, la homogénea: pe de erre es erre menos uno al cuadrado, y ye ce es ce uno e a la equis más ce dos equis e a la equis.",
    "Paso dos, la función de prueba. g es e a la equis más equis: un s por sumando. Para e a la equis, lambda igual a uno es raíz doble, s es dos y la prueba es A equis cuadrado e a la equis. Para equis, lambda es cero, s es cero y la prueba es B equis más C.",
    "Paso tres, los coeficientes: L de ye pe igual a g da A igual a un medio, B igual a uno y C igual a dos.",
    "Paso cuatro, la solución: ye igual a ye ce, más un medio equis cuadrado e a la equis, más equis, más dos.",
    "Y si g no está en la familia, como tangente, logaritmo o secante, el camino es otro: variación de parámetros, de la Semana nueve.",
    "También hay un control: se sustituye ye pe en L, y cuando s es al menos uno se cancelan los términos de mayor grado.",
    "Lo único que cambia de un ejemplo a otro es el s del paso dos. La lámina siguiente muestra cómo se lee.",
    // 120-125 -- Infografía de repaso (2/2)
    "Cómo se lee s. Si lambda no es raíz, s es cero, la prueba es A e a la lambda equis, y la solución particular es acotada, como en los ejemplos uno, dos, tres y la parte b del nueve.",
    "Si lambda es raíz simple, s es uno, la prueba lleva un factor equis y la envolvente crece proporcional a equis, como en los ejemplos cuatro, cinco y ocho.",
    "Si lambda es raíz doble, s es dos, la envolvente crece como equis cuadrado, como en los ejemplos seis, siete y la parte a del nueve.",
    "Para sumas, cada sumando con su propio s: el Ejemplo nueve tenía s igual a dos y s igual a cero.",
    "Y si g es tangente, logaritmo o secante, otro método: variación de parámetros. En Cauchy–Euler, primero equis igual a e a la te.",
    "Autoevaluación: en ye doble prima más cuatro ye igual a coseno de dos equis, y en ye doble prima más cuatro ye igual a coseno de equis, ¿cuánto vale s y cómo crece la solución particular? Responde la pregunta.",
    // 126-127 -- El mapa de la unidad
    "El mapa de la unidad. Semana seis: la estructura ye igual a ye ce más ye pe, y el wronskiano. Semana siete: ye ce con coeficientes constantes. Semana ocho: ye ce de Cauchy–Euler. Semana nueve: ye pe por variación de parámetros, para cualquier g. Semana diez, esta: ye pe por coeficientes indeterminados, con g en la familia de funciones de prueba.",
    "Las flechas continuas son el camino natural; las punteadas indican que cada método de ye pe usa ambos tipos de ye ce: la Semana nueve sirve a Cauchy–Euler, y esta semana vimos que el cambio equis igual a e a la te reduce Cauchy–Euler a coeficientes constantes.",
    // 128-135 -- Recapitulación
    "Recapitulación de la semana.",
    "Uno: ye igual a ye ce más ye pe, y basta una sola solución particular, porque L de ye menos ye pe es cero.",
    "Dos: coeficientes indeterminados sirve cuando L tiene coeficientes constantes y g es una suma de funciones de la forma polinomio por e a la alfa equis por coseno o seno de beta equis, porque las derivadas de g viven en un espacio de dimensión finita.",
    "Tres: la prueba es equis a la s, por e a la alfa equis, por R de equis coseno de beta equis más S de equis seno de beta equis, con grados de R y S a lo sumo m, y s igual a la multiplicidad de lambda como raíz de pe.",
    "Cuatro: los coeficientes salen de un sistema lineal triangular. Si pe de lambda no es cero, s es cero y siempre se resuelve. Si pe de lambda es cero, hay resonancia y hay que multiplicar por equis a la s.",
    "Cinco: si g es una suma, cada sumando tiene su propio s.",
    "Seis: el método no sirve para logaritmo de equis, tangente, secante, uno sobre equis y similares; se usa variación de parámetros.",
    "Lectura sugerida: Zill, novena edición, sección cuatro punto cuatro, coeficientes indeterminados, método de superposición. Opcional, la sección cuatro punto cinco, el método del anulador.",
    // 136-136 -- Sección: problemas y soluciones
    "Ahora, a practicar. Hay tres niveles de problemas; en cada uno, primero los enunciados y luego las soluciones. Intenta resolver antes de ver la solución.",
    // 137-141 -- Cómo usar esta sección
    "Cómo usar esta sección. Hay tres niveles. El nivel uno, con ocho problemas: decides cuál es s y la forma de ye pe, sin calcular coeficientes. El nivel dos, con seis problemas, que se resuelven completos. Y el nivel tres, con cinco problemas, donde se demuestra, se modela y se decide qué método usar.",
    "Cada nivel tiene primero los enunciados y luego las soluciones. Trabaja los enunciados y solo después revela las soluciones.",
    "Tiempos sugeridos en una clase presencial: nivel uno, diez minutos en parejas; nivel dos, uno o dos problemas en el tablero; nivel tres, discusión o tarea. En tu estudio, tómate el tiempo que necesites.",
    "El procedimiento de siempre: polinomio característico y raíces, luego ye ce, luego lambda y s para cada sumando, la prueba, los coeficientes, y finalmente ye igual a ye ce más ye pe.",
    "Un error frecuente: en un problema de valor inicial, las condiciones iniciales se aplican a la solución general, ye igual a ye ce más ye pe, nunca solo a ye ce.",
    // 142-142 -- Nivel 1 (sección)
    "Nivel uno: la forma de ye pe.",
    // 143-144 -- Nivel 1: enunciados
    "Para cada ecuación, halla las raíces de pe, el valor de s para cada sumando de g, y la forma de ye pe. Uno punto uno: ye doble prima más cuatro ye igual a tres seno de dos equis. Uno punto dos: ye doble prima menos cinco ye prima más seis ye igual a equis e a la dos equis. Uno punto tres: ye triple prima menos ye doble prima igual a tres equis cuadrado. Uno punto cuatro: ye doble prima más dos ye prima más ye igual a e a la menos equis. Uno punto cinco: ye doble prima menos dos ye prima más cinco ye igual a e a la equis coseno de dos equis. Uno punto seis: ye doble prima más ye igual a equis cuadrado más seno de equis. Uno punto siete: ye doble prima más nueve ye igual a equis cuadrado e a la tres equis. Y uno punto ocho: la cuarta derivada de ye más ye doble prima, igual a uno más coseno de equis.",
    "Algunos de ellos tienen trampa: en unos hay dos sumandos con s distintos, y en otro hay un exponente real que no es raíz de pe. Pausa el video, trabaja los ocho con lápiz y papel, y responde la pregunta sobre el uno punto tres.",
    // 145-155 -- Nivel 1: soluciones
    "Soluciones del nivel uno. La tabla tiene las raíces de pe y el lambda de g, el valor de s, y la forma de ye pe, con una ye pe real como control.",
    "Uno punto uno: las raíces son más o menos dos i y lambda es más o menos dos i; s es uno, la prueba es equis por A coseno de dos equis más B seno de dos equis, y ye pe es menos tres cuartos equis coseno de dos equis.",
    "Uno punto dos: raíces dos y tres, lambda igual a dos, s es uno. La prueba es equis por A equis más B, por e a la dos equis, y ye pe es menos equis cuadrado sobre dos más equis, por e a la dos equis.",
    "Uno punto tres: raíces cero, cero y uno, lambda igual a cero, s es dos. La prueba es equis cuadrado por A equis cuadrado más B equis más C, y ye pe es menos equis a la cuarta sobre cuatro, menos equis cubo, menos tres equis cuadrado.",
    "Uno punto cuatro: raíces menos uno y menos uno, lambda igual a menos uno, s es dos. La prueba es A equis cuadrado e a la menos equis, y ye pe es un medio equis cuadrado e a la menos equis.",
    "Segunda tabla de soluciones, para las ecuaciones uno punto cinco a uno punto ocho. Antes de ver las filas, una pregunta sobre el uno punto siete. Responde.",
    "Uno punto cinco: raíces uno más o menos dos i, lambda igual a uno más o menos dos i, s es uno. La prueba es equis e a la equis por A coseno de dos equis más B seno de dos equis, y ye pe es un cuarto equis e a la equis seno de dos equis.",
    "Uno punto seis: raíces más o menos i. Para equis cuadrado, lambda es cero y s es cero; para seno de equis, lambda es más o menos i y s es uno. La prueba es A equis cuadrado más B equis más C, más equis por D coseno de equis más E seno de equis; y ye pe es equis cuadrado menos dos menos equis sobre dos por coseno de equis.",
    "Uno punto siete: raíces más o menos tres i, y lambda igual a tres. Como tres no es raíz, s es cero. La prueba es A equis cuadrado más B equis más C, por e a la tres equis, y ye pe es equis cuadrado sobre dieciocho, menos equis sobre veintisiete, más uno sobre ciento sesenta y dos, todo por e a la tres equis.",
    "Uno punto ocho: raíces cero, cero y más o menos i. Para el uno, lambda es cero y s es dos; para coseno de equis, lambda es más o menos i y s es uno. La prueba es A equis cuadrado más equis por B coseno de equis más C seno de equis, y ye pe es equis cuadrado sobre dos menos equis sobre dos por seno de equis.",
    "Las trampas: el uno punto seis y el uno punto ocho, con dos sumandos de s distintos, y el uno punto siete, donde lambda igual a tres no es raíz de más o menos tres i.",
    // 156-156 -- Nivel 2 (sección)
    "Nivel dos: resolver.",
    // 157-159 -- Nivel 2: enunciados
    "Estos son los problemas del nivel dos. Dos punto uno: ye doble prima más ye prima menos dos ye igual a dos equis cuadrado. Dos punto dos: ye doble prima menos dos ye prima más dos ye igual a cinco seno de equis. Dos punto tres: ye doble prima menos cinco ye prima más seis ye igual a cuatro e a la tres equis, con ye de cero igual a cero y ye prima de cero igual a uno. Dos punto cuatro: ye doble prima más dos ye prima más ye igual a tres e a la menos equis. Dos punto cinco: ye doble prima menos cuatro ye igual a ocho equis más cuatro e a la dos equis. Dos punto seis: ye doble prima más cuatro ye prima más cinco ye igual a ocho e a la menos dos equis.",
    "En el dos punto seis, la pregunta: ¿hay resonancia? Justifica con pe de menos dos.",
    "Antes de resolver cada uno, decide s y escribe la forma de ye pe, como en el nivel uno. Después, comprueba ye pe derivando.",
    // 160-164 -- Problema 2.1
    "Problema dos punto uno: ye doble prima más ye prima menos dos ye igual a dos equis cuadrado. Paso uno: erre cuadrado más erre menos dos es erre más dos por erre menos uno, y ye ce es ce uno e a la menos dos equis más ce dos e a la equis.",
    "Paso dos: lambda igual a cero y pe de cero es menos dos, distinto de cero, así que s es cero y la prueba es A equis cuadrado más B equis más C.",
    "Paso tres: con ye pe prima igual a dos A equis más B, y ye pe doble prima igual a dos A, el operador da menos dos A equis cuadrado, más dos A menos dos B, por equis, más dos A más B menos dos C; y eso debe ser igual a dos equis cuadrado. Igualando coeficientes se obtiene un sistema. Responde: ¿cuánto vale C?",
    "El sistema: menos dos A igual a dos, dos A menos dos B igual a cero, y dos A más B menos dos C igual a cero. Resulta A igual a menos uno, B igual a menos uno y C igual a menos tres medios.",
    "La solución general es ce uno e a la menos dos equis más ce dos e a la equis, menos equis cuadrado, menos equis, menos tres medios.",
    // 165-169 -- Problema 2.2
    "Problema dos punto dos: ye doble prima menos dos ye prima más dos ye igual a cinco seno de equis. Paso uno: erre cuadrado menos dos erre más dos igual a cero da erre igual a uno más o menos i, y ye ce es e a la equis por ce uno coseno de equis más ce dos seno de equis. Ojo: en ye ce aparecen coseno y seno de equis. ¿Habrá resonancia? Responde la pregunta.",
    "Paso dos: g es cinco seno de equis, con lambda igual a más o menos i. Calculamos pe de i: menos uno menos dos i más dos, que es uno menos dos i, distinto de cero. Entonces s es cero y la prueba es A coseno de equis más B seno de equis.",
    "Paso tres: el operador aplicado a la prueba da A menos dos B, por coseno de equis, más dos A más B, por seno de equis, que debe ser cinco seno de equis. Luego A menos dos B igual a cero y dos A más B igual a cinco, de donde A es dos y B es uno.",
    "Paso cuatro: la solución general es e a la equis por ce uno coseno de equis más ce dos seno de equis, más dos coseno de equis más seno de equis.",
    "Comprobación con el atajo complejo: cinco sobre pe de i es cinco sobre uno menos dos i, que es uno más dos i. La parte imaginaria de uno más dos i, por coseno de equis más i seno de equis, es dos coseno de equis más seno de equis. Coincide.",
    // 170-174 -- Problema 2.3
    "Problema dos punto tres: ye doble prima menos cinco ye prima más seis ye igual a cuatro e a la tres equis, con ye de cero igual a cero y ye prima de cero igual a uno. Paso uno: erre cuadrado menos cinco erre más seis es erre menos dos por erre menos tres, y ye ce es ce uno e a la dos equis más ce dos e a la tres equis.",
    "Paso dos: lambda igual a tres es raíz simple, s es uno, y la prueba es A equis e a la tres equis.",
    "Paso tres: el operador aplicado a equis e a la tres equis es pe de tres por equis más pe prima de tres, todo por e a la tres equis, y como pe de tres es cero queda pe prima de tres por e a la tres equis. Con pe prima de erre igual a dos erre menos cinco, pe prima de tres es uno, y A es cuatro. Ahora aplica las condiciones iniciales a la solución general y responde: ¿cuánto valen ce uno y ce dos?",
    "Paso cuatro: ye es ce uno e a la dos equis más ce dos e a la tres equis más cuatro equis e a la tres equis. Ahora sí las condiciones iniciales, sobre ye y no sobre ye ce: ye de cero es ce uno más ce dos, igual a cero; y ye prima de cero es dos ce uno más tres ce dos más cuatro, igual a uno. Resulta ce uno igual a tres y ce dos igual a menos tres.",
    "La solución del problema de valor inicial es tres e a la dos equis, menos tres e a la tres equis, más cuatro equis e a la tres equis.",
    // 175-180 -- Problemas 2.4 y 2.5
    "Problemas dos punto cuatro y dos punto cinco. El dos punto cuatro es ye doble prima más dos ye prima más ye igual a tres e a la menos equis. El dos punto cinco es ye doble prima menos cuatro ye igual a ocho equis más cuatro e a la dos equis.",
    "Dos punto cuatro: pe es erre más uno al cuadrado, y ye ce es ce uno más ce dos equis, por e a la menos equis. Lambda igual a menos uno es raíz doble, s es dos, y la prueba es A equis cuadrado e a la menos equis. El operador aplicado a equis cuadrado e a la lambda equis es pe doble prima de lambda por e a la lambda equis, que aquí es dos e a la menos equis; entonces dos A igual a tres y A es tres medios. La solución es ce uno más ce dos equis más tres medios equis cuadrado, todo por e a la menos equis.",
    "Dos punto cinco: pe es erre cuadrado menos cuatro, y ye ce es ce uno e a la dos equis más ce dos e a la menos dos equis. Hay dos sumandos, y cada uno tiene su propio s. ¿Cuánto vale s para cada uno? Responde la pregunta.",
    "Para g uno igual a ocho equis: lambda es cero, pe de cero es menos cuatro, distinto de cero, y s es cero. La prueba es B equis más C, el operador da menos cuatro B equis menos cuatro C igual a ocho equis, así que B es menos dos y C es cero.",
    "Para g dos igual a cuatro e a la dos equis: lambda igual a dos es raíz simple, s es uno, la prueba es A equis e a la dos equis, y A por pe prima de dos, que es cuatro A, es igual a cuatro. Entonces A es uno.",
    "La solución del dos punto cinco: ce uno e a la dos equis más ce dos e a la menos dos equis, menos dos equis, más equis e a la dos equis.",
    // 181-186 -- Problema 2.6
    "Problema dos punto seis: ye doble prima más cuatro ye prima más cinco ye igual a ocho e a la menos dos equis. Paso uno: erre cuadrado más cuatro erre más cinco igual a cero da erre igual a menos dos más o menos i, y ye ce es e a la menos dos equis por ce uno coseno de equis más ce dos seno de equis. Pregunta: ¿cuál es la forma de ye pe? Responde.",
    "Paso dos: g es ocho e a la menos dos equis, con lambda igual a menos dos. La tentación es decir: e a la menos dos equis aparece en ye ce, entonces ye pe es A equis e a la menos dos equis. Eso es falso: pe de menos dos es cuatro menos ocho más cinco, o sea uno, distinto de cero. Entonces lambda igual a menos dos no es raíz y s es cero.",
    "Las raíces son menos dos más o menos i. En ye ce aparece e a la menos dos equis multiplicado por coseno y seno de equis, que no es e a la menos dos equis solo.",
    "Paso tres: ye pe igual a A e a la menos dos equis. El operador da pe de menos dos por A e a la menos dos equis, que es A e a la menos dos equis, igual a ocho e a la menos dos equis. Entonces A es ocho.",
    "Paso cuatro: la solución general es e a la menos dos equis por ce uno coseno de equis más ce dos seno de equis más ocho.",
    "Es el mismo fenómeno del Ejemplo tres: la parte real coincide con una raíz, pero lambda no es raíz.",
    // 187-187 -- Nivel 3 (sección)
    "Nivel tres: razonar y modelar.",
    // 188-188 -- Nivel 3: enunciados
    "Cinco problemas. Tres punto uno: sea lambda raíz simple de pe; demuestra que L de equis e a la lambda equis es pe prima de lambda por e a la lambda equis, y deduce una solución particular para g igual a g cero por e a la lambda equis; aplícalo a ye doble prima menos tres ye prima más dos ye igual a cinco e a la dos equis. Tres punto dos: si ye pe igual a equis e a la menos equis seno de dos equis resuelve ye doble prima más dos ye prima más cinco ye igual a g, halla g, y di qué prueba habrías propuesto sin conocer ye pe. Tres punto tres, masa y resorte: equis doble prima más cuatro equis igual a F cero coseno de omega te, con equis de cero y equis prima de cero iguales a cero; resuelve con F cero igual a tres y omega igual a uno, y con F cero igual a ocho y omega igual a dos, y compara. Tres punto cuatro: ¿por qué el método no sirve para ye doble prima más ye igual a tangente de equis, y qué método usarías? Tres punto cinco: resuelve equis cuadrado ye doble prima menos tres equis ye prima más cuatro ye igual a equis cuadrado, con equis positiva, usando equis igual a e a la te.",
    // 189-192 -- Solución 3.1
    "Solución tres punto uno. Demostración: por inducción, la k-ésima derivada de equis e a la lambda equis es lambda a la k por equis, más k lambda a la k menos uno, todo por e a la lambda equis. Multiplicando por a sub k y sumando, y usando que la suma de a k lambda a la k es pe de lambda, y que la suma de k a k lambda a la k menos uno es pe prima de lambda, resulta L de equis e a la lambda equis igual a e a la lambda equis por pe de lambda equis más pe prima de lambda, que es pe prima de lambda por e a la lambda equis cuando pe de lambda es cero. Para la aplicación, ye doble prima menos tres ye prima más dos ye igual a cinco e a la dos equis: ¿cuál es ye pe? Responde la pregunta.",
    "Consecuencia: si pe prima de lambda no es cero, es decir, si la raíz es simple, y g es g cero por e a la lambda equis, entonces ye pe es g cero sobre pe prima de lambda, por equis e a la lambda equis.",
    "Aplicación: pe de erre es erre menos uno por erre menos dos; lambda igual a dos es raíz simple; pe prima de erre es dos erre menos tres, y pe prima de dos es uno. Luego ye pe es cinco equis e a la dos equis, y la solución general es ce uno e a la equis más ce dos e a la dos equis más cinco equis e a la dos equis.",
    "Análogamente, para raíz doble, L de equis cuadrado e a la lambda equis es pe doble prima de lambda por e a la lambda equis, si pe de lambda y pe prima de lambda son cero; de donde ye pe es g cero sobre pe doble prima de lambda, por equis cuadrado e a la lambda equis. Verifícalo con el problema dos punto cuatro.",
    // 193-197 -- Solución 3.2
    "Solución tres punto dos, un problema inverso. Con lambda igual a menos uno más dos i, pe de erre es erre cuadrado más dos erre más cinco, pe de lambda es cero y pe prima de lambda es dos lambda más dos, o sea cuatro i. Por la fórmula de tres punto uno, que vale también para lambda complejo, L de equis e a la lambda equis es cuatro i por e a la lambda equis, que es menos cuatro e a la menos equis seno de dos equis, más cuatro i e a la menos equis coseno de dos equis.",
    "Como L es real, tomando partes real e imaginaria de equis e a la lambda equis, igual a equis e a la menos equis por coseno de dos equis más i seno de dos equis, resulta: L de equis e a la menos equis coseno de dos equis es menos cuatro e a la menos equis seno de dos equis, y L de equis e a la menos equis seno de dos equis es cuatro e a la menos equis coseno de dos equis.",
    "Respuesta: g de equis es cuatro e a la menos equis coseno de dos equis.",
    "Y sin conocer ye pe: lambda igual a menos uno más o menos dos i es raíz simple, s es uno, y la prueba es equis e a la menos equis por A coseno de dos equis más B seno de dos equis, que da A igual a cero y B igual a uno.",
    "Compara con el Ejemplo ocho: g igual a cuatro e a la menos equis por coseno de dos equis menos dos seno de dos equis dio A igual a dos y B igual a uno. Aquí solo hay coseno.",
    // 198-201 -- Solución 3.3 (I)
    "Solución tres punto tres: masa y resorte forzado. La ecuación es equis doble prima más cuatro equis igual a F cero coseno de omega te. Pe es erre cuadrado más cuatro, con raíces más o menos dos i, y equis ce es ce uno coseno de dos te más ce dos seno de dos te. Caso a: F cero igual a tres y omega igual a uno. Lambda igual a más o menos i no es raíz, s es cero, y la prueba es A coseno de te más B seno de te.",
    "El operador da tres A coseno de te más tres B seno de te, igual a tres coseno de te. Entonces A es uno y B es cero, y equis es ce uno coseno de dos te más ce dos seno de dos te más coseno de te.",
    "Con equis de cero igual a ce uno más uno igual a cero, y equis prima de cero igual a dos ce dos igual a cero, resulta equis de te igual a coseno de te menos coseno de dos te, y está acotada por dos. Ahora, el caso b: F cero igual a ocho y omega igual a dos, que es la frecuencia natural del resorte. ¿Cómo será equis de te? Responde la pregunta.",
    "Caso b: lambda igual a más o menos dos i sí es raíz simple, s es uno, y la prueba es te por A coseno de dos te más B seno de dos te. Como pe prima de dos i es cuatro i, igual que en el tres punto dos, L de te coseno de dos te es menos cuatro seno de dos te, y L de te seno de dos te es cuatro coseno de dos te. Queda menos cuatro A seno de dos te más cuatro B coseno de dos te, igual a ocho coseno de dos te, así que A es cero y B es dos.",
    // 202-205 -- Solución 3.3 (II)
    "Caso b, continuación: equis es ce uno coseno de dos te más ce dos seno de dos te más dos te seno de dos te. Con equis de cero igual a ce uno igual a cero, y equis prima de cero igual a dos ce dos igual a cero, resulta equis de te igual a dos te seno de dos te, con envolvente más o menos dos te que tiende a infinito: amplitud lineal.",
    "Comparación. En el caso a, omega distinto de dos, el movimiento es acotado: batimientos. A la derecha está la gráfica, en azul la solución acotada.",
    "En el caso b, omega igual a dos, la amplitud crece sin cota, la curva roja: es la resonancia.",
    "Y el caso b es el límite del caso a cuando omega tiende a dos, como vimos en la gráfica de resonancia.",
    // 206-209 -- Solución 3.4
    "Solución tres punto cuatro: por qué el método no sirve para ye doble prima más ye igual a tangente de equis. Las derivadas de tangente de equis no viven en un espacio de dimensión finita. Con u igual a tangente de equis y u prima igual a uno más u cuadrado, la derivada de u a la k es k u a la k menos uno más k u a la k más uno: sube el grado.",
    "Así, tangente de equis, secante cuadrada de equis, que es uno más u cuadrado, dos u por uno más u cuadrado, y siguientes, son polinomios en u de grado cada vez mayor, linealmente independientes. Ninguna prueba con finitos coeficientes puede contenerlas todas; es lo mismo que pasaba con el logaritmo en el cierre bajo derivación.",
    "El método: variación de parámetros, de la Semana nueve. Con ye uno igual a coseno de equis, ye dos igual a seno de equis, wronskiano uno y f igual a tangente de equis: u uno prima es menos seno cuadrado sobre coseno, u dos prima es seno de equis, y ye pe es menos coseno de equis por el logaritmo del valor absoluto de secante más tangente.",
    "Respuesta: ye igual a ce uno coseno de equis más ce dos seno de equis, menos coseno de equis por el logaritmo del valor absoluto de secante de equis más tangente de equis, en el intervalo de menos pi medios a pi medios.",
    // 210-214 -- Solución 3.5
    "Solución tres punto cinco: Cauchy–Euler con equis igual a e a la te. Con doble ve de te igual a ye de e a la te, equis ye prima es doble ve sub te, y equis cuadrado ye doble prima es doble ve sub te te menos doble ve sub te. Entonces la ecuación queda doble ve sub te te, menos cuatro doble ve sub te, más cuatro doble ve, igual a e a la dos te.",
    "Paso uno: pe es erre menos dos al cuadrado, y doble ve ce es ce uno más ce dos te, por e a la dos te; es decir, ye ce es equis cuadrado por ce uno más ce dos logaritmo de equis.",
    "Paso dos: lambda igual a dos es raíz doble, s es dos, doble ve pe es A te cuadrado e a la dos te, y el operador da pe doble prima de dos, que es dos, por e a la dos te. Entonces dos A igual a uno y A es un medio.",
    "Paso tres: con te igual al logaritmo de equis, la solución es equis cuadrado por ce uno más ce dos logaritmo de equis, más un medio equis cuadrado logaritmo de equis al cuadrado, para equis positiva.",
    "Comprobación: ye pe es un medio equis cuadrado por logaritmo cuadrado de equis; ye pe prima es equis logaritmo cuadrado más equis logaritmo; ye pe doble prima es logaritmo cuadrado más tres logaritmo más uno. Al sustituir en equis cuadrado ye doble prima menos tres equis ye prima más cuatro ye, resulta equis cuadrado.",
    // 215-215 -- Referencias
    "Para profundizar: Zill, Ecuaciones diferenciales con aplicaciones en modelado, novena edición; Simmons, Ecuaciones diferenciales con aplicaciones y notas históricas, segunda edición; y Boyce y DiPrima, Ecuaciones diferenciales y problemas con valores en la frontera, cuarta edición. Con esto terminamos. ¡Gracias, y nos vemos en clase!"
  ],
  // Preguntas intercaladas (22).
  preguntas: [
    {
      despues: 3,
      enunciado: "Ejemplo 3: \\(y''+2y'-3y=20e^{x}\\cos 2x\\), con \\(y_c=c_1e^{x}+c_2e^{-3x}\\). ¿Qué forma de \\(y_p\\) debe proponerse?",
      opciones: ["\\(e^{x}(A\\cos2x+B\\sin2x)\\)", "\\(Ae^{x}\\cos2x\\)", "\\(xe^{x}(A\\cos2x+B\\sin2x)\\)", "\\(e^{x}(Ax+B)\\cos2x\\)"],
      correcta: 0,
      explicacion: "Aquí \\(\\lambda=1+2i\\) y \\(p(\\lambda)=-4+8i\\neq0\\): \\(s=0\\). Hace falta el par completo \\(\\cos\\) y \\(\\sin\\), porque al derivar uno produce el otro. La parte real de \\(\\lambda\\) coincide con la raíz \\(1\\), pero \\(\\lambda\\) no es raíz: no hay resonancia y no se multiplica por \\(x\\)."
    },
    {
      despues: 7,
      enunciado: "Al igualar coeficientes en \\(e^{x}[(8B-4A)\\cos2x-(4B+8A)\\sin2x]=20e^{x}\\cos2x\\) se obtiene \\(-4A+8B=20\\) y \\(-8A-4B=0\\). ¿Cuánto valen \\(A\\) y \\(B\\)?",
      opciones: ["\\(A=-1,\\ B=2\\)", "\\(A=1,\\ B=-2\\)", "\\(A=2,\\ B=-1\\)", "\\(A=-2,\\ B=1\\)"],
      correcta: 0,
      explicacion: "De la segunda ecuación, \\(B=-2A\\). En la primera: \\(-4A-16A=-20A=20\\), luego \\(A=-1\\) y \\(B=2\\). Solución particular: \\(y_p=e^{x}(-\\cos2x+2\\sin2x)\\)."
    },
    {
      despues: 16,
      enunciado: "En el Ejemplo 4, la prueba \\(y_p=Ae^{x}\\) llevó a \\(0=2e^{x}\\). ¿Cuál es la causa?",
      opciones: ["\\(e^{x}\\) ya es solución de la homogénea, así que \\(L(Ae^{x})=0\\) para todo \\(A\\)", "Se derivó mal \\(Ae^{x}\\)", "El método no se aplica cuando \\(g=2e^{x}\\)", "Faltó un término constante \\(B\\) en la prueba"],
      correcta: 0,
      explicacion: "\\(r=1\\) es raíz de \\(p(r)=r^2+3r-4\\), luego \\(L(Ae^{x})=p(1)Ae^{x}=0\\neq2e^{x}\\) para todo \\(A\\). La derivada está bien y el método sí aplica; el remedio es subir un grado: \\(y_p=Axe^{x}\\). Añadir una constante \\(B\\) no ayuda, porque \\(L(B)=-4B\\) no produce \\(e^{x}\\)."
    },
    {
      despues: 28,
      enunciado: "Si \\(\\lambda\\) es raíz <em>doble</em> de \\(p\\) y \\(g=e^{\\lambda x}\\), ¿cuál es la forma de \\(y_p\\)?",
      opciones: ["\\(Ax^{2}e^{\\lambda x}\\)", "\\(Axe^{\\lambda x}\\)", "\\(Ae^{\\lambda x}\\)", "\\((Ax+B)e^{\\lambda x}\\)"],
      correcta: 0,
      explicacion: "\\(s\\) es la multiplicidad de \\(\\lambda\\): aquí \\(s=2\\). Con \\(Axe^{\\lambda x}\\) todavía se obtiene \\(L=0\\), porque \\(xe^{\\lambda x}\\) también está en \\(y_c\\); hace falta \\(x^{2}\\)."
    },
    {
      despues: 34,
      enunciado: "Ejemplo 5: \\(y''+3y'-4y=-2e^{-4x}\\), con \\(y_c=c_1e^{-4x}+c_2e^{x}\\). ¿Qué prueba debe usarse?",
      opciones: ["\\(Axe^{-4x}\\)", "\\(Ae^{-4x}\\)", "\\(Ax^{2}e^{-4x}\\)", "\\((Ax+B)e^{-4x}\\)"],
      correcta: 0,
      explicacion: "\\(\\lambda=-4\\) es raíz simple de \\(p\\) (y \\(e^{-4x}\\in y_c\\)): \\(s=1\\). \\(Ae^{-4x}\\) da \\(L=0\\); \\(x^{2}\\) sería para una raíz doble; y \\(Be^{-4x}\\) no aporta nada porque ya está en \\(y_c\\)."
    },
    {
      despues: 48,
      enunciado: "Ejemplo 6: con \\(y_p=Ax^{3}+Bx^{2}\\) se tiene \\(y_p''=6Ax+2B\\). Igualando con \\(-4x\\), ¿cuánto valen \\(A\\) y \\(B\\)?",
      opciones: ["\\(A=-\\tfrac23,\\ B=0\\)", "\\(A=\\tfrac23,\\ B=0\\)", "\\(A=-\\tfrac23,\\ B=-2\\)", "\\(A=-4,\\ B=0\\)"],
      correcta: 0,
      explicacion: "\\(6A=-4\\Rightarrow A=-\\tfrac23\\) y \\(2B=0\\Rightarrow B=0\\). Control: integrando dos veces \\(y''=-4x\\) se obtiene \\(-\\tfrac23x^{3}\\), con signo negativo."
    },
    {
      despues: 56,
      enunciado: "Ejemplo 7: \\(p(r)=(r-2)^2\\), así que \\(p(2)=p'(2)=0\\) y \\(p''(2)=2\\). Recuerde que \\(L(x^{2}e^{\\lambda x})=\\bigl[p(\\lambda)x^{2}+2p'(\\lambda)x+p''(\\lambda)\\bigr]e^{\\lambda x}\\). ¿Cuánto vale \\(L(Ax^{2}e^{2x})\\)?",
      opciones: ["\\(2A\\,e^{2x}\\)", "\\(0\\)", "\\(A\\,e^{2x}\\)", "\\(4A\\,xe^{2x}\\)"],
      correcta: 0,
      explicacion: "Con \\(\\lambda=2\\): \\(p(2)=0\\) y \\(p'(2)=0\\) anulan los dos primeros términos y queda \\(p''(2)\\,A\\,e^{2x}=2Ae^{2x}\\). Por eso \\(2A=6\\) y \\(A=3\\)."
    },
    {
      despues: 61,
      enunciado: "Ejemplo 8: \\(y''+2y'+5y=4e^{-x}(\\cos2x-2\\sin2x)\\), con raíces \\(-1\\pm2i\\) de \\(p\\). Para \\(\\lambda=-1+2i\\), ¿cuánto vale \\(s\\)?",
      opciones: ["\\(s=1\\)", "\\(s=0\\)", "\\(s=2\\)", "No se puede decidir sin hallar los coeficientes"],
      correcta: 0,
      explicacion: "\\(\\lambda=-1+2i\\) coincide con una raíz simple de \\(p\\): \\(s=1\\). La prueba es \\(e^{-x}(Ax\\cos2x+Bx\\sin2x)\\); la \\(x\\) multiplica a ambos términos."
    },
    {
      despues: 64,
      enunciado: "Ejemplo 8: al sustituir \\(y_p\\) los términos con \\(x\\) se cancelan y queda \\(L(y_p)=e^{-x}(4B\\cos2x-4A\\sin2x)\\), que debe igualar \\(4e^{-x}\\cos2x-8e^{-x}\\sin2x\\). ¿Cuánto valen \\(A\\) y \\(B\\)?",
      opciones: ["\\(A=2,\\ B=1\\)", "\\(A=1,\\ B=2\\)", "\\(A=-2,\\ B=1\\)", "\\(A=2,\\ B=-1\\)"],
      correcta: 0,
      explicacion: "\\(4B=4\\Rightarrow B=1\\) y \\(-4A=-8\\Rightarrow A=2\\). Solución particular: \\(y_p=xe^{-x}(2\\cos2x+\\sin2x)\\)."
    },
    {
      despues: 83,
      enunciado: "Ejemplo 9: \\(y''-2y'+y=e^{x}+x\\), con \\(p(r)=(r-1)^2\\). ¿Qué forma de \\(y_p\\) corresponde?",
      opciones: ["\\(Ax^{2}e^{x}+Bx+C\\)", "\\(x^{2}(Ae^{x}+Bx+C)\\)", "\\(Axe^{x}+Bx+C\\)", "\\(Ae^{x}+Bx+C\\)"],
      correcta: 0,
      explicacion: "Cada sumando con su propio \\(s\\). Para \\(e^{x}\\): \\(\\lambda=1\\) es raíz doble, \\(s=2\\), luego \\(Ax^{2}e^{x}\\). Para \\(x\\): \\(\\lambda=0\\) no es raíz (\\(p(0)=1\\)), \\(s=0\\), luego \\(Bx+C\\). No se multiplica toda la prueba por \\(x^{2}\\)."
    },
    {
      despues: 93,
      enunciado: "Con \\(x=e^{t}\\) la ecuación queda \\(w_{tt}-2w_t+w=2e^{t}\\). ¿Cuánto vale \\(s\\)?",
      opciones: ["\\(s=2\\)", "\\(s=0\\)", "\\(s=1\\)", "\\(s=3\\)"],
      correcta: 0,
      explicacion: "\\(p(r)=(r-1)^2\\) y \\(\\lambda=1\\) es raíz doble: \\(s=2\\), \\(w_p=At^{2}e^{t}\\). Como \\(L(t^{2}e^{t})=p''(1)e^{t}=2e^{t}\\), resulta \\(A=1\\)."
    },
    {
      despues: 109,
      enunciado: "Para \\(y''+y=\\sec x\\), ¿qué método usaría?",
      opciones: ["Variación de parámetros", "Coeficientes indeterminados con \\(A\\sec x+B\\tan x\\)", "Coeficientes indeterminados con \\(x^{s}(A\\cos x+B\\sin x)\\)", "Ningún método funciona"],
      correcta: 0,
      explicacion: "\\(\\sec x\\) no pertenece a la familia de polinomios, exponenciales, senos y cosenos: sus derivadas generan \\(\\sec x\\tan x\\), \\(\\sec x\\tan^2x,\\dots\\), infinitas funciones independientes. Aquí corresponde variación de parámetros, que sí admite cualquier \\(g\\) continua."
    },
    {
      despues: 125,
      enunciado: "Autoevaluación: para \\(y''+4y=\\cos2x\\) y para \\(y''+4y=\\cos x\\), ¿cuánto vale \\(s\\) y cómo crece la solución particular en cada caso?",
      opciones: ["\\(s=1\\) (envolvente \\(\\propto x\\)) y \\(s=0\\) (acotada)", "\\(s=0\\) (acotada) y \\(s=1\\) (envolvente \\(\\propto x\\))", "\\(s=1\\) en los dos casos", "\\(s=2\\) y \\(s=0\\)"],
      correcta: 0,
      explicacion: "Las raíces de \\(p(r)=r^2+4\\) son \\(\\pm2i\\). En \\(\\cos2x\\), \\(\\lambda=\\pm2i\\) es raíz simple: \\(s=1\\), \\(y_p=\\tfrac x4\\sin2x\\), que crece. En \\(\\cos x\\), \\(\\lambda=\\pm i\\) no es raíz: \\(s=0\\), \\(y_p=\\tfrac13\\cos x\\), acotada."
    },
    {
      despues: 144,
      enunciado: "Nivel 1, ecuación 1.3: \\(y'''-y''=3x^{2}\\). ¿Cuánto vale \\(s\\)?",
      opciones: ["\\(s=2\\)", "\\(s=0\\)", "\\(s=1\\)", "\\(s=3\\)"],
      correcta: 0,
      explicacion: "\\(p(r)=r^3-r^2=r^2(r-1)\\): raíces \\(0,0,1\\). Para \\(g=3x^2\\), \\(\\lambda=0\\) es raíz doble: \\(s=2\\) y \\(y_p=x^{2}(Ax^{2}+Bx+C)\\)."
    },
    {
      despues: 150,
      enunciado: "Nivel 1, ecuación 1.7: \\(y''+9y=x^{2}e^{3x}\\). ¿Cuánto vale \\(s\\)?",
      opciones: ["\\(s=0\\)", "\\(s=1\\)", "\\(s=2\\)", "\\(s=3\\)"],
      correcta: 0,
      explicacion: "Las raíces de \\(p(r)=r^2+9\\) son \\(\\pm3i\\), pero \\(g\\) tiene \\(\\lambda=3\\) (real). \\(3\\) no es raíz: \\(s=0\\) y \\(y_p=(Ax^{2}+Bx+C)e^{3x}\\). La trampa es confundir \\(e^{3x}\\) con \\(\\cos3x,\\sin3x\\)."
    },
    {
      despues: 162,
      enunciado: "Problema 2.1: con \\(y_p=Ax^{2}+Bx+C\\) se obtiene \\(L(y_p)=-2Ax^{2}+(2A-2B)x+(2A+B-2C)\\), que debe ser \\(2x^{2}\\). ¿Cuánto vale \\(C\\)?",
      opciones: ["\\(-\\tfrac32\\)", "\\(\\tfrac32\\)", "\\(-1\\)", "\\(-3\\)"],
      correcta: 0,
      explicacion: "\\(-2A=2\\Rightarrow A=-1\\); \\(2A-2B=0\\Rightarrow B=-1\\); \\(2A+B-2C=0\\Rightarrow-3-2C=0\\Rightarrow C=-\\tfrac32\\)."
    },
    {
      despues: 165,
      enunciado: "Problema 2.2: \\(y''-2y'+2y=5\\sin x\\), con \\(y_c=e^{x}(c_1\\cos x+c_2\\sin x)\\). ¿Hay resonancia?",
      opciones: ["No: \\(\\lambda=\\pm i\\) no es raíz de \\(p\\) (las raíces son \\(1\\pm i\\)), así que \\(s=0\\)", "Sí: \\(\\cos x\\) y \\(\\sin x\\) aparecen en \\(y_c\\), luego \\(s=1\\)", "Sí, con \\(s=2\\)", "Depende de las condiciones iniciales"],
      correcta: 0,
      explicacion: "En \\(y_c\\) aparecen \\(e^{x}\\cos x\\) y \\(e^{x}\\sin x\\), no \\(\\cos x\\) y \\(\\sin x\\) solos. \\(p(i)=1-2i\\neq0\\): \\(s=0\\), \\(y_p=A\\cos x+B\\sin x\\)."
    },
    {
      despues: 172,
      enunciado: "Problema 2.3: \\(y=c_1e^{2x}+c_2e^{3x}+4xe^{3x}\\), con \\(y(0)=0\\) y \\(y'(0)=1\\). ¿Cuánto valen \\(c_1\\) y \\(c_2\\)?",
      opciones: ["\\(c_1=3,\\ c_2=-3\\)", "\\(c_1=-1,\\ c_2=1\\)", "\\(c_1=3,\\ c_2=3\\)", "\\(c_1=0,\\ c_2=0\\)"],
      correcta: 0,
      explicacion: "Las condiciones se aplican a \\(y\\), no a \\(y_c\\): \\(c_1+c_2=0\\) y \\(2c_1+3c_2+4=1\\), luego \\(c_1=3\\), \\(c_2=-3\\). Si se aplicaran solo a \\(y_c\\) saldría \\(c_1=-1\\), \\(c_2=1\\): el error típico."
    },
    {
      despues: 177,
      enunciado: "Problema 2.5: \\(y''-4y=8x+4e^{2x}\\), con \\(p(r)=r^2-4\\). ¿Cuánto vale \\(s\\) para cada sumando, \\(8x\\) y \\(4e^{2x}\\)?",
      opciones: ["\\(s=0\\) para \\(8x\\) y \\(s=1\\) para \\(4e^{2x}\\)", "\\(s=1\\) para ambos", "\\(s=0\\) para ambos", "\\(s=1\\) para \\(8x\\) y \\(s=0\\) para \\(4e^{2x}\\)"],
      correcta: 0,
      explicacion: "Para \\(8x\\): \\(\\lambda=0\\), \\(p(0)=-4\\neq0\\), \\(s=0\\). Para \\(4e^{2x}\\): \\(\\lambda=2\\) es raíz simple de \\(p\\), \\(s=1\\). Cada sumando tiene su propio \\(s\\)."
    },
    {
      despues: 181,
      enunciado: "Problema 2.6: \\(y''+4y'+5y=8e^{-2x}\\), con \\(y_c=e^{-2x}(c_1\\cos x+c_2\\sin x)\\). ¿Cuál es la forma correcta de \\(y_p\\)?",
      opciones: ["\\(Ae^{-2x}\\)", "\\(Axe^{-2x}\\)", "\\(e^{-2x}(A\\cos x+B\\sin x)\\)", "\\(Ax^{2}e^{-2x}\\)"],
      correcta: 0,
      explicacion: "\\(p(-2)=4-8+5=1\\neq0\\): \\(\\lambda=-2\\) no es raíz y \\(s=0\\). Que \\(e^{-2x}\\) aparezca multiplicado por \\(\\cos x\\) y \\(\\sin x\\) en \\(y_c\\) no es lo mismo que \\(e^{-2x}\\) solo."
    },
    {
      despues: 189,
      enunciado: "Problema 3.1: para \\(y''-3y'+2y=5e^{2x}\\), use \\(L(xe^{\\lambda x})=p'(\\lambda)e^{\\lambda x}\\). ¿Cuál es \\(y_p\\)?",
      opciones: ["\\(5xe^{2x}\\)", "\\(\\tfrac52xe^{2x}\\)", "\\(5e^{2x}\\)", "\\(5x^{2}e^{2x}\\)"],
      correcta: 0,
      explicacion: "\\(p(r)=(r-1)(r-2)\\); \\(\\lambda=2\\) es raíz simple y \\(p'(r)=2r-3\\), luego \\(p'(2)=1\\). Entonces \\(y_p=\\dfrac{5}{p'(2)}xe^{2x}=5xe^{2x}\\)."
    },
    {
      despues: 200,
      enunciado: "Masa–resorte \\(x''+4x=F_0\\cos\\omega t\\), con \\(x(0)=x'(0)=0\\). Ahora \\(F_0=8\\) y \\(\\omega=2\\), la frecuencia natural. ¿Cómo es \\(x(t)\\)?",
      opciones: ["La amplitud crece linealmente con \\(t\\) (resonancia)", "Sigue acotada, como en el caso (a)", "Es periódica con amplitud constante", "Decae a cero"],
      correcta: 0,
      explicacion: "\\(\\lambda=\\pm2i\\) es raíz simple de \\(p(r)=r^2+4\\): \\(s=1\\), \\(x_p=t(A\\cos2t+B\\sin2t)\\). La solución del PVI es \\(x(t)=2t\\sin2t\\), con envolvente \\(\\pm2t\\to\\infty\\)."
    }
  ]
};
