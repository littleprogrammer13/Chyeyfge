// Importa os módulos necessários
const express = require('express');
const cors = require('cors');

// Inicializa o aplicativo Express
const app = express();
const port = 3000; // A porta onde o backend vai rodar

// Configuração do CORS
// O CORS é crucial para permitir que o frontend (que roda em uma porta/domínio diferente, como o arquivo local)
// possa fazer requisições para este backend.
// Se seu frontend rodar em 'http://127.0.0.1:5500', você pode restringir a origem,
// mas para simplicidade, permitimos todas ('*').
app.use(cors());

// Middleware para analisar corpos de requisições JSON (se você fosse receber dados)
app.use(express.json());

// ----------------------------------------------------------------------
// Rota GET para simular a resposta do backend
// ----------------------------------------------------------------------
app.get('/api/mensagem', (req, res) => {
    console.log('Requisição recebida na rota /api/mensagem');
    
    // Simula um atraso de 1 segundo (como se fosse um processamento de banco de dados)
    setTimeout(() => {
        // Envia a resposta de sucesso (código 200) com um objeto JSON
        res.status(200).json({
            status: 'success',
            message: 'YAY', // A mensagem que o frontend deve exibir
            timestamp: new Date().toISOString()
        });
    }, 1000); // 1000 milissegundos = 1 segundo
});

// ----------------------------------------------------------------------
// Inicia o Servidor
// ----------------------------------------------------------------------
app.listen(port, () => {
    console.log(`Backend rodando em http://localhost:${port}`);
    console.log('Pressione CTRL+C para parar o servidor');
});
