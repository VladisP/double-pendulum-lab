export const createInputForm = (onSubmit) => {
    const form = document.createElement('form');

    form.innerHTML = `
        <div class="input-form__content-wrapper">
            <div class="input-form__inputs-wrapper">
                <label for="input-form-alpha-1">Alpha 1</label>
                <input
                    id="input-form-alpha-1"
                    name="alpha-1"
                    type="number"
                    required
                    autocomplete="off"
                >
                <label for="input-form-alpha-2">Alpha 2</label>
                <input
                    id="input-form-alpha-2"
                    name="alpha-2"
                    type="number"
                    required
                    autocomplete="off"
                >
            </div>            
            <input
                type="submit"
                id="input-form-submit"
                value="Submit"
            >
        </div>
    `;

    form.addEventListener('submit', event => {
        event.preventDefault();

        const alpha1 = form.elements['alpha-1'].value;
        const alpha2 = form.elements['alpha-2'].value;

        onSubmit(alpha1, alpha2);
    });

    return form;
};
