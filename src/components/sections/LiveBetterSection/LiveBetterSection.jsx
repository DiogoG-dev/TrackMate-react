import './LiveBetterSection.css'

export function LiveBetterSection() {
    return (
        <section className="live-better-section">
            <div className="live-better-content">
                <div className="sleep live-better-card">
                    <i className="fa-solid fa-moon"></i>
                    <h2>SAIBA MAIS SOBRE VOCÊ</h2>
                    <h3>Acompanhe o seu sono</h3>
                </div>
                <div className="meditation live-better-card">
                    <i className="fa-solid fa-leaf"></i>
                    <h2>RESPIRE FUNDO</h2>
                    <h3>Faça meditação guiada</h3>
                </div>
            </div>
        </section>
    )
}