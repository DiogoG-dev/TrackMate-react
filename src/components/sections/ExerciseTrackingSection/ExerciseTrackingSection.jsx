import './ExerciseTrackingSection.css';

export function ExerciseTrackingSection() {
    return (
        <section className="exercise-tracking-section">
            <div className="exercise-tracking-content">
                <h2><i className="fa-solid fa-dumbbell"></i>ACOMPANHAMENTO DE EXERCÍCIOS</h2>
                <h3>Ajuste sua rotina com estatísticas precisas de treino</h3>
                <p>
                    O <b>TrackMate 0.4 XE</b> oferece monitoramento avançado, gráficos detalhados e insights em tempo real para otimizar seu 
                    desempenho em cada sessão de treino.
                </p>
            </div>
            <div className="gradient-background-product">
                <img className="smartphoneSmarwatch" src="/TrackMate-react/imgs/folds/smartphoneSmarwatch.avif" alt="" />
            </div>
        </section>
    )
}