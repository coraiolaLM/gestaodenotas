const addDadosAluno = () => {
    const nome = document.getElementById('input_nome').value
    const ra = document.getElementById('input_ra').value
    const email = document.getElementById('input_email').value
    const prova1 = parseFloat(document.getElementById('input_prova_1').value)
    const aep1 = parseFloat(document.getElementById('input_aep_1').value)
    const provaIntegrada1 = parseFloat(document.getElementById('input_prova_integrada_1').value)
    const prova2 = parseFloat(document.getElementById('input_prova_2').value)
    const aep2 = parseFloat(document.getElementById('input_aep_2').value)
    const provaIntegrada2 = parseFloat(document.getElementById('input_prova_integrada_2').value)

    if (!nome || !ra || !email || isNaN(prova1) || isNaN(aep1) || isNaN(provaIntegrada1) || isNaN(prova2) || isNaN(aep2) || isNaN(provaIntegrada2)) {
        alert("Todos os campos são obrigatórios e devem ser números válidos")
    }

    if (ra.length != 9) {
        alert("O RA deve conter 9 digitos")
    }

    if (prova1 < 0 || prova1 > 8 || prova2 < 0 || prova2 > 8) {
        alert("As notas das provas devem estar entre 0 e 8")
    }
    if (aep1 < 0 || aep1 > 1 || aep2 < 0 || aep2 > 1) {
        alert("As notas da aep devem estar entre 0 e 1")
    }

    if (provaIntegrada1 < 0 || provaIntegrada1 > 1 || provaIntegrada2 < 0 || provaIntegrada2 > 1) {
        alert("As notas da prova integrada devem estar entre 0 e 1")
    }

    const mediaBimestre1 = Math.min(10, (prova1 * 0.8) + (aep1 * 0.1) + (provaIntegrada1 * 0.1))
    const mediaBimestre2 = Math.min(10, (prova2 * 0.8) + (aep2 * 0.1) + (provaIntegrada2 * 0.1))
    const mediaFinal = (mediaBimestre1 + mediaBimestre2) / 2
    
    let status
    if (mediaFinal >= 6) {
        status = "Aprovado"
    } else if (mediaFinal >= 3) {
        status = "Recuperação"
    } else {
        status = "Reprovado"
    }

    const nvLinha = `<tr>
                        <td>${nome}</td>
                        <td>${ra}</td>
                        <td>${email}</td>
                        <td>${mediaBimestre1.toFixed(2)}</td>
                        <td>${mediaBimestre2.toFixed(2)}</td>
                        <td>${mediaFinal.toFixed(2)}</td>
                        <td>${status}</td>
                        <td><button onclick="editarAluno(this)">Editar</button><button onclick="excluirAluno(this)">Excluir</button></td>
                    </tr>`
    const tbody = document.getElementById('tbodyAlunos')
    tbody.insertAdjacentHTML('beforeend', nvLinha)

    document.getElementById('formCadastro').reset()

}

const editarAluno = (button) => {

}

const excluirAluno = (button) => {

}
