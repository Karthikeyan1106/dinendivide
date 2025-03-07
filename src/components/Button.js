function Button({children,onAdd}) {
    return (
        <button className="button" onClick={onAdd}>
            {children}
        </button>
    )
}

export default Button
