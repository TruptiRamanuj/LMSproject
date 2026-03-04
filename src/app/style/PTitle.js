export default function PTitle({ title = "Demo", color = "black" }) {
    return (
        <h1 style={{ color: color }}>{title}</h1 >
    );
}