
let tokenss = []
let index = 0

export default function handler(req, res) {
    if (req.method === 'GET') {

        const token = crypto.getRandomValues(new Uint8Array(16)).toString();
        tokenss[index] = token
        index++
        res.status(200).json({ token });

    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
