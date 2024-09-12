const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]



export const TipPorcentajePropina = () => {
    return (
        <form>
            <h3>Propina</h3>
            <div className="m-2">
                {
                    tipOptions.map((tip) => (
                        <div key={tip.id}>
                            <label key={tip.label} className="m-2 fw-semibold">Propina {tip.label}:</label>
                            <input type="radio" value={tip.value} name="tip" />
                        </div>
                    ))
                }
            </div>
        </form>
    )
}
