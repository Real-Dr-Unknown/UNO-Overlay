
let tokens = JSON.parse(localStorage.getItem('tkn'));

export default function handler(req, res) {
    if (req.method === 'POST') {

        const headers = req.headers;
        const authHeader = headers['authorization'];

        for (let i = 0; i < tokens.length; i++) {
            if (authHeader == tokens[i]) {
                localStorage.setItem(tokens[i], JSON.stringify(req.body))
            }
        }

        res.status(200).json({ message: 'User data received successfully' });

        localStorage.setItem()
    }
}