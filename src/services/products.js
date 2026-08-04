const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/products`;

const index = async () => {
    const res = await fetch(BASE_URL)
    const data = await res.json()

    if (!res.ok) {
        throw new Error(`${res.status}: ${data.message}`)
    }
    return data 
}

const show = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`)
    const data = await res.json()

    if (!res.ok) {
        throw new Error(`${res.status}: ${data.message}`)
    }
    return data
}

const create  = async (FormData) => {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'applicatiom/json',
        },
        body: JSON.stringify(FormData),
    })

    const data = await res.json()

    if (!res.ok) {
        throw new Error(`${res.status}: ${data.message}`)
    }
    return data
}

const deleteProduct = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    })

    const data = await res.json()

    if (!res.ok) {
        throw new Error(`${res.status}: ${data.message}`)
    }
    return data
}

const update = async (id, formData) => {
    const res = await fetch(`${BASE_URL}/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    const data = await res.json()

    if (!res.ok) {
        throw new Error(`${res.status}: ${data.message}`)
    }
    return data 
}

export { index, show, create, deleteProduct, update}