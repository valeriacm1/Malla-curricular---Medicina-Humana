function marcarCurso(curso) {
  // Si el curso está habilitado, lo apruebas
  if (curso.classList.contains('habilitado')) {
    curso.classList.remove('habilitado');
    curso.classList.add('aprobado');
    curso.innerText = curso.innerText + " - Aprobado";
  } 
  // Si el curso está deshabilitado, lo habilitas
  else if (curso.classList.contains('deshabilitado')) {
    curso.classList.remove('deshabilitado');
    curso.classList.add('habilitado');
    curso.innerText = curso.innerText.replace(" - No disponible", "") + " - Habilitado";
  }
  // Si el curso ya está aprobado, cambia a deshabilitado
  else if (curso.classList.contains('aprobado')) {
    curso.classList.remove('aprobado');
    curso.classList.add('deshabilitado');
    curso.innerText = curso.innerText.replace(" - Aprobado", "") + " - No disponible";
  }
}

// Inicializar los cursos como habilitados o deshabilitados
document.querySelectorAll('.curso').forEach(curso => {
  if (curso.classList.contains('habilitado')) {
    curso.innerText = curso.innerText + " - Habilitado";
  } else if (curso.classList.contains('deshabilitado')) {
    curso.innerText = curso.innerText + " - No disponible";
  }
});
