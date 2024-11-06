
let tkns = JSON.parse(localStorage.getItem('tkn'));

export default function handler(req, res) {
    const { token } = req.query; // Get the token from the URL query parameter

    for (let i = 0; i < tkns.length; i++) {
        if (token == tkns[i]) {
            let data = localStorage.getItem(tkns[i])
            res.status(200).json({ data });
        }
    }
}
