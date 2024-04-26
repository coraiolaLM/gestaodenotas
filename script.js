const addDadosAluno = () => {
    const nome = document.getElementById('input_nome').value;
    const ra = document.getElementById('input_ra').value;
    const email = document.getElementById('input_email').value;
    const prova1 = parseFloat(document.getElementById('input_prova_1').value);
    const aep1 = parseFloat(document.getElementById('input_aep_1').value);
    const provaIntegrada1 = parseFloat(document.getElementById('input_prova_integrada_1').value);
    const prova2 = parseFloat(document.getElementById('input_prova_2').value);
    const aep2 = parseFloat(document.getElementById('input_aep_2').value);
    const provaIntegrada2 = parseFloat(document.getElementById('input_prova_integrada_2').value);

    
    if (!nome || !ra || !email || isNaN(prova1) || isNaN(aep1) || isNaN(provaIntegrada1) || isNaN(prova2) || isNaN(aep2) || isNaN(provaIntegrada2)) {
        alert("Todos os campos são obrigatórios e devem ser números válidos");
        return;
    }

    
    if (ra.length !== 9) {
        alert("O RA deve conter 9 dígitos");
        return;
    }

    if (prova1 < 0 || prova1 > 8 || prova2 < 0 || prova2 > 8 || aep1 < 0 || aep1 > 1 || aep2 < 0 || aep2 > 1 || provaIntegrada1 < 0 || provaIntegrada1 > 1 || provaIntegrada2 < 0 || provaIntegrada2 > 1) {
        alert("As notas devem estar dentro dos seguintes intervalos: Prova (0-8), AEP (0-1), Prova Integrada (0-1)");
        return;
    }

    const mediaBimestre1 = Math.min(10, prova1 + aep1 + provaIntegrada1);
    const mediaBimestre2 = Math.min(10, prova2 + aep2 + provaIntegrada2);
    const mediaFinal = (mediaBimestre1 + mediaBimestre2) / 2;

    let status;
    if (mediaFinal >= 6) {
        status = "Aprovado";
    } else if (mediaFinal >= 3) {
        status = "Recuperação";
    } else {
        status = "Reprovado";
    }

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${nome}</td>
        <td>${ra}</td>
        <td>${email}</td>
        <td>${mediaBimestre1.toFixed(2)}</td>
        <td>${mediaBimestre2.toFixed(2)}</td>
        <td>${mediaFinal.toFixed(2)}</td>
        <td>${status}</td>
        <td>
            <button onclick="editarAluno(this)">Editar</button>
            <button onclick="excluirAluno(this)">Excluir</button>
        </td>
    `;

    const tbody = document.getElementById('tbodyAlunos');
    tbody.appendChild(newRow);

    document.getElementById('formCadastro').reset();

    localStorage.setItem(`nome_${ra}`, nome);
    localStorage.setItem(`email_${ra}`, email);
    localStorage.setItem(`${ra}_prova1`, prova1.toString());
    localStorage.setItem(`${ra}_aep1`, aep1.toString());
    localStorage.setItem(`${ra}_provaIntegrada1`, provaIntegrada1.toString());
    localStorage.setItem(`${ra}_prova2`, prova2.toString());
    localStorage.setItem(`${ra}_aep2`, aep2.toString());
    localStorage.setItem(`${ra}_provaIntegrada2`, provaIntegrada2.toString());
};

const editarAluno = (button) => {
         const row = button.parentNode.parentNode;
         const cells = row.getElementsByTagName('td');
    
         const nome = cells[0].innerText;
         const ra = cells[1].innerText;
         const email = cells[2].innerText;
    
         const prova1 = parseFloat(localStorage.getItem(ra + '_prova1'));
         const aep1 = parseFloat(localStorage.getItem(ra + '_aep1'));
         const provaIntegrada1 = parseFloat(localStorage.getItem(ra + '_provaIntegrada1'));
         const prova2 = parseFloat(localStorage.getItem(ra + '_prova2'));
         const aep2 = parseFloat(localStorage.getItem(ra + '_aep2'));
         const provaIntegrada2 = parseFloat(localStorage.getItem(ra + '_provaIntegrada2'));
    
         document.getElementById('input_nome').value = nome;
         document.getElementById('input_ra').value = ra;
         document.getElementById('input_email').value = email;
         document.getElementById('input_prova_1').value = prova1;
         document.getElementById('input_prova_2').value = prova2;
         document.getElementById('input_aep_1').value = aep1;
         document.getElementById('input_aep_2').value = aep2;
         document.getElementById('input_prova_integrada_1').value = provaIntegrada1;
         document.getElementById('input_prova_integrada_2').value = provaIntegrada2;

         document.getElementById('input_nome').focus();
    
         const formButton = document.getElementById('formCadastro').querySelector('button');
         formButton.innerText = 'Atualizar Aluno';
         formButton.onclick = () => {
             const novaProva1 = parseFloat(document.getElementById('input_prova_1').value);
             const novaAep1 = parseFloat(document.getElementById('input_aep_1').value);
             const novaProvaIntegrada1 = parseFloat(document.getElementById('input_prova_integrada_1').value);
             const novaProva2 = parseFloat(document.getElementById('input_prova_2').value);
             const novaAep2 = parseFloat(document.getElementById('input_aep_2').value);
             const novaProvaIntegrada2 = parseFloat(document.getElementById('input_prova_integrada_2').value);
             const novaMediaBimestre1 = Math.min(10, novaProva1 + novaAep1 + novaProvaIntegrada1);
             const novaMediaBimestre2 = Math.min(10, novaProva2 + novaAep2 + novaProvaIntegrada2);
             const novaMediaFinal = (novaMediaBimestre1 + novaMediaBimestre2) / 2;
    
             let novoStatus;
             if (novaMediaFinal >= 6) {
                        novoStatus = "Aprovado";
             } else if (novaMediaFinal >= 3) {
                        novoStatus = "Recuperação";
             } else {
                        novoStatus = "Reprovado";
             }
             cells[0].innerText = document.getElementById('input_nome').value;
             cells[1].innerText = document.getElementById('input_ra').value;
             cells[2].innerText = document.getElementById('input_email').value;
             cells[3].innerText = novaMediaBimestre1.toFixed(2);
             cells[4].innerText = novaMediaBimestre2.toFixed(2);
             cells[5].innerText = novaMediaFinal.toFixed(2);
             cells[6].innerText = novoStatus;
    
             formButton.innerText = 'Cadastrar Aluno';
             formButton.onclick = addDadosAluno;
    
         localStorage.setItem(ra + '_prova1', novaProva1.toString());
         localStorage.setItem(ra + '_aep1', novaAep1.toString());
         localStorage.setItem(ra + '_provaIntegrada1', novaProvaIntegrada1.toString());
         localStorage.setItem(ra + '_prova2', novaProva2.toString());
         localStorage.setItem(ra + '_aep2', novaAep2.toString());
         localStorage.setItem(ra + '_provaIntegrada2', novaProvaIntegrada2.toString());
    
         document.getElementById('formCadastro').reset();
         };
};

const excluirAluno = (button) => {
    const row = button.parentNode.parentNode;
    const tbody = document.getElementById('tbodyAlunos');
    tbody.removeChild(row);
    const ra = row.cells[1].innerText;
    localStorage.removeItem(ra + '_prova1');
    localStorage.removeItem(ra + '_aep1');
    localStorage.removeItem(ra + '_provaIntegrada1');
    localStorage.removeItem(ra + '_prova2');
    localStorage.removeItem(ra + '_aep2');
    localStorage.removeItem(ra + '_provaIntegrada2');
};

document.addEventListener('DOMContentLoaded', function(){
    const tbody = document.getElementById('tbodyAlunos');

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.endsWith('_prova1')) {
            const ra = key.split('_')[0];
            const nome = localStorage.getItem(`nome_${ra}`);
            const email = localStorage.getItem(`email_${ra}`);
            const prova1 = parseFloat(localStorage.getItem(`${ra}_prova1`));
            const prova2 = parseFloat(localStorage.getItem(`${ra}_prova2`));
            const aep1 = parseFloat(localStorage.getItem(`${ra}_aep1`));
            const aep2 = parseFloat(localStorage.getItem(`${ra}_aep2`));
            const provaIntegrada1 = parseFloat(localStorage.getItem(`${ra}_provaIntegrada1`));
            const provaIntegrada2 = parseFloat(localStorage.getItem(`${ra}_provaIntegrada2`));

            const mediaBimestre1 = Math.min(10, prova1 + aep1 + provaIntegrada1);
            const mediaBimestre2 = Math.min(10, prova2 + aep2 + provaIntegrada2);
            const mediaFinal = (mediaBimestre1 + mediaBimestre2) / 2;
            let status;
            if (mediaFinal >= 6) {
                status = "Aprovado";
            } else if (mediaFinal >= 3) {
                status = "Recuperação";
            } else {
                status = "Reprovado";
            }

            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${nome}</td>
                <td>${ra}</td>
                <td>${email}</td>
                <td>${mediaBimestre1.toFixed(2)}</td>
                <td>${mediaBimestre2.toFixed(2)}</td>
                <td>${mediaFinal.toFixed(2)}</td>
                <td>${status}</td>
                <td>
                    <button onclick="editarAluno(this)">Editar</button>
                    <button onclick="excluirAluno(this)">Excluir</button>
                </td>
            `;
            tbody.appendChild(newRow);
        }
    }
});
