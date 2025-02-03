<template>
    <form action="https://formsubmit.co/cinesapop@gmail.com" method="POST">
        <header>
            <router-link to="/" class="back-button">
                <a>&#8592;</a>
            </router-link>
            <h2>Contacto</h2>
        </header>

        <div class="form">
            <div class="input-group">
                <label for="name">Nombre</label>
                <input type="text" name="name" id="name" placeholder="Nombre" required />

                <label for="phone">Teléfono</label>
                <input type="tel" name="phone" id="phone" placeholder="Teléfono" required />

                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" required />

                <label for="message">Mensaje</label>
                <textarea name="message" id="message" cols="30" rows="5" placeholder="Mensaje" required></textarea>

                <input class="enviar_contacto" type="submit" value="Enviar" />
            </div>
        </div>
    </form>
</template>

<style>
.back-button {
    position: absolute;
    left: 10px;
    font-size: 1.8rem;
    color: var(--btn-color);
    text-decoration: none;
    transition: color 0.3s ease;
}

.back-button:hover {
    color: var(--main-color);
}

h2 {
    color: var(--btn-color);
    font-size: 2.2rem;
    font-weight: 700;
}

.form {
    padding: 40px 30px;
    background-color: #1b2546;
    border-radius: 20px;
    box-shadow: var(--box-shadow);
    width: 90%;
    max-width: 400px;
}

.input-group {
    display: flex;
    flex-direction: column;
    text-align: left;
}

label {
    color: var(--bg-color);
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 10px;
}

input,
textarea {
    padding: 12px 15px;
    border-radius: 8px;
    margin-bottom: 15px;
    background-color: var(--text-color);
    border: 1px solid var(--dark-color);
    color: #333;
    outline: none;
    font-size: 0.95rem;
    transition: all 0.3s ease;
}

input:hover,
textarea:hover {
    border-color: var(--btn-color);
}

input:focus,
textarea:focus {
    border-color: var(--btn-color);
    box-shadow: rgba(147, 77, 238, 0.5) 0px 0px 5px;
}

input::placeholder,
textarea::placeholder {
    color: #666;
    font-size: 0.9rem;
}

.enviar_contacto {
    background-color: var(--btn-color);
    border: none;
    border-radius: 8px;
    padding: 12px 20px;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.enviar_contacto:hover {
    background-color: #722bbf;
    transform: translateY(-2px);
    box-shadow: rgba(147, 77, 238, 0.3) 0px 5px 10px;
}

.enviar_contacto:active {
    transform: translateY(0);
}

@media (max-width: 768px) {
    body {
        flex-direction: column;
        padding: 20px;
    }

    h2 {
        font-size: 1.8rem;
    }

    .form {
        padding: 30px 20px;
    }

    .back-button {
        font-size: 1.5rem;
    }

    input,
    textarea {
        font-size: 0.85rem;
    }

    .enviar_contacto {
        padding: 10px 15px;
        font-size: 0.9rem;
    }
}
</style>