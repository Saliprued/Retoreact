const Constants = {
    ls_tasks : 'tasks',
    bg_color : '#aaaacc',
    sin_foto : 'http:....' ,
    error_validacion: 'Debe validar todo los campos',
    form_carga_inicial: 'Se han cargado los datos existentes',
    headers : {
        'Content-Type': 'application/json'
    },
    url_gadget:'http://localhost:8080/api/gadget',
    default_product:{
        id: '',
        brand: '',
        category: '',
        name: '',
        description: '',
        price: 0,
        availability: true,
        quantity: 0,
        photography: '',
    },
    url_user:'http://localhost:8080/api/user',
    default_user:{
        id: '',
        identification: '',
        name: '',
        birthtDay: '',
        monthBirthtDay: '',
        address: '',
        cellphone: '',
        email: '',
        password: '',
        zone:'',
        type:'',
    },
    url_order:'http://localhost:8080/api/order',
}

export default Constants