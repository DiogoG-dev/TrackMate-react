import './NotificationSystemSection.css'

export function NotificationSystemSection() {
    return (
        <section className="notification-system-section">
            <div className="gradient-background-product"><img className="foldImage" src="/TrackMate-react/imgs/folds/foldImage.avif" alt="" /></div>
            <div className="notification-system-content">
                <h2><i className="fa-solid fa-comment-dots"></i>SISTEMA DE NOTIFICAÇÃO</h2>
                <h3>Lembretes para você manter o ritmo</h3>
                <p>
                    Receba alertas inteligentes com o <b>TrackMade 0.4 XE</b> e nunca perca um treino. Programe lembretes personalizados e 
                    mantenha sua rotina sempre em dia.
                </p>
            </div>
        </section>
    )
}