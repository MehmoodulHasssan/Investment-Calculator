

export default function InputBar({ label, onPut }) {
    function handleInput(e) {
        onPut(e.target.value, label)
    }
    return (
        <label>
            {label}
            <input type="number" onChange={handleInput} />
        </label>

    )

}