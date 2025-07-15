function mostrarPreRequisito(curso) {
  // Objeto con los pre-requisitos de cada curso según el documento proporcionado
  let preRequisitos = {
    "Química": "Nada",
    "Matemática": "Nada",
    "Lengua y Oratoria": "Nada",
    "Introducción a la Medicina": "Nada",
    "Desempeño Universitario": "Nada",
    "Biología Celular y Molecular": "Nada",
    "Redacción General": "Lengua y Oratoria",
    "Realidad Nacional": "Lengua y Comunicación + Desempeño Universitario",
    "Morfofisiología I": "Biología Celular y Molecular",
    "Introducción a la Investigación": "Nada",
    "Bioquímica": "Química",
    "Anatomía General": "Biología Celular y Molecular",
    "Morfofisiología II": "Anatomía General + Morfofisiología I",
    "Inmunología": "Morfofisiología I",
    "Genética Médica": "Biología Celular y Molecular",
    "Filosofía": "Nada",
    "Estadística General": "Matemática",
    "Educación Ambiental": "Nada",
    "Morfofisiología III": "Anatomía General + Morfofisiología I",
    "Infectología Básica": "Bioquímica + Morfofisiología I",
    "Fisiopatología I": "Morfofisiología II",
    "Desarrollo y Crecimiento": "Biología Celular y Molecular",
    "Bioética": "Introducción a la Medicina + Redacción General",
    "Salud Mental": "Filosofía",
    "Morfofisiología IV": "Morfofisiología III",
    "Fundamentos de Medicina Intercultural": "Filosofía + Realidad Nacional",
    "Fisiopatología II": "Morfofisiología II",
    "Bioestadística": "Estadística General",
    "Semiología basada en la simulación": "Fisiopatología I + Fisiopatología II + Inmunología + Morfofisiología II + Morfofisiología III + Morfofisiología IV",
    "Semiología": "Fisiopatología I + Fisiopatología II + Inmunología + Morfofisiología II + Morfofisiología III + Morfofisiología IV",
    "Farmacología": "Infectología Básica",
    "Apoyo al Diagnóstico": "Morfofisiología IV",
    "Anatomía Patológica": "Fisiopatología II",
    "Seguridad del Paciente y Calidad": "Bioética",
    "Nutrición y Prácticas Saludables": "Farmacología",
    "Metodología de la Investigación": "Bioestadística",
    "Medicina Interna I": "Anatomía Patológica + Semiología + Semiología basada en la simulación",
    "Epidemiología": "Bioestadística",
    "Salud Pública": "Epidemiología",
    "Medicina Interna II": "Medicina Interna I",
    "Medicina Basada en la Evidencia": "Epidemiología + Metodología de la Investigación",
    "Atención Primaria en Salud": "Epidemiología",
    "Tesis I": "Medicina Basada en la Evidencia",
    "Terapéutica": "Medicina Interna II",
    "Simulación Clínica Integrada": "Medicina Interna II",
    "Medicina Legal": "Bioética + Semiología + Semiología basada en la simulación",
    "Medicina Interna III": "Medicina Interna II",
    "Simulación Quirúrgica": "Medicina Interna III + Simulación Clínica Integrada",
    "Ecografía": "Apoyo al Diagnóstico + Semiología",
    "Cuidados Paliativos y Rehabilitación Física": "Bioética + Terapéutica",
    "Cirugía": "Medicina Interna III + Simulación Clínica Integrada",
    "Análisis de Casos I": "Medicina Interna III + Simulación Clínica Integrada + Terapéutica",
    "Tesis II": "Tesis I",
    "Simulación Pediátrica": "Medicina Interna III + Simulación Clínica Integrada",
    "Simulación Gineco-Obstetricia": "Cirugía + Simulación Quirúrgica",
    "Pediatría": "Medicina Interna III + Simulación Clínica Integrada",
    "Ginecología y Obstetricia": "Cirugía + Simulación Quirúrgica",
    "Pre-Internado": "Todos los cursos obligatorios hasta el 11° ciclo y acreditación de suficiencia en inglés",
    "Informática Biomédica": "Atención Primaria en Salud + Inglés A2",
    "Gerencia en Salud": "Atención Primaria en Salud + Inglés A2",
    "Análisis de Casos II": "Análisis de Casos I + Inglés A2",
    "Trabajo de Investigación": "Todos los cursos obligatorios hasta el 12° ciclo y 8 créditos electivos y Examen de suficiencia médica",
    "Internado en Pediatría": "Todos los cursos obligatorios hasta el 12° ciclo y 8 créditos electivos y Examen de suficiencia médica",
    "Internado en Medicina": "Todos los cursos obligatorios hasta el 12° ciclo y 8 créditos electivos y Examen de suficiencia médica",
    "Internado en Cirugía": "Todos los cursos obligatorios hasta el 12° ciclo y 8 créditos electivos y Examen de suficiencia médica",
    "Internado en Ginecología y Obstetricia": "Todos los cursos obligatorios hasta el 12° ciclo y 8 créditos electivos y Examen de suficiencia médica"
  };

  let cursoSeleccionado = curso.innerText;
  let prerequisito = preRequisitos[cursoSeleccionado] || "Sin información de pre-requisito";
  
  document.getElementById("descripcion-curso").innerText = `Pre-requisitos de ${cursoSeleccionado}: ${prerequisito}`;
}

// Función para inicializar los cursos habilitados o deshabilitados
document.querySelectorAll('.curso').forEach(curso => {
  if (curso.classList.contains('habilitado')) {
    curso.innerText = curso.innerText + " - Habilitado";
  } else if (curso.classList.contains('deshabilitado')) {
    curso.innerText = curso.innerText + " - No disponible";
  }
});
