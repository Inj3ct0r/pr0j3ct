/*-publisherFormData.jsx-*/

/*  The way it works is that formData is an object with nested components, the parent component
    represents the page we currently are, and the fields array has components representing each
    field, note that each component has a name, a label, and an uid (which is mainly used in 
    the Form code), refer to the referenced page to further understand how this works, because
    this is not a stantard way of doing it as far as i know.
*/

export const formData = [
  {
    component: "page",
    label: "Publicar",
    _uid: "3a30803f-135f-442c-ab6e-d44d7d7a5164",
    fields: [
      {
        component: "options",
        label: "Seleccione el tipo de publicación",
        type: "radio",
        _uid: "bd90f44a-d479-49ae-ad66-c2c475dca66b",
        options: [
          {
            component: "option",
            label: "Promoción",
            value: "one"
          },
          {
            component: "option",
            label: "Evento",
            value: "two"
          }
        ]
      },
      {
        component: "field_group",
        label: "Promoción",
        _uid: "eb169f76-4cd9-4513-b673-87c5c7d27e02",
        conditional: {
          value: "one",
          field:
            "3a30803f-135f-442c-ab6e-d44d7d7a5164_bd90f44a-d479-49ae-ad66-c2c475dca66b"
        },
        fields: [
          {
            component: "text",
            label: "Nombre de la promoción",
            type: "text",
            _uid: "fd783c11-862a-4e20-90f9-5132c40623fb"
          },
          {
            component: "text",
            label: "Detalles la promoción",
            type: "text",
            _uid: "5bf4cc18-a918-46a9-afc7-748b8d836558"
          },
          {
            component: "text",
            label: "Target de la promoción",
            type: "text",
            _uid: "887c7391-1139-45f2-9250-a71fffaffbe7"
          },
          {
            component: "text",
            label: "Preferencia asociada",
            type: "text",
            _uid: "75961f81-1651-4923-ac60-0bb916bb3915"
          },
          {
            component: "text",
            label: "Duración de la promoción",
            type: "text",
            _uid: "c3ac593c-7b49-465b-994c-806842057c7a"
          }
        ]
      },
      {
        component: "field_group",
        label: "Evento",
        _uid: "82b32921-f752-4984-8dfd-faeae2138cd7",
        conditional: {
          value: "two",
          field:
            "3a30803f-135f-442c-ab6e-d44d7d7a5164_bd90f44a-d479-49ae-ad66-c2c475dca66b"
        },
        fields: [
          {
            component: "text",
            label: "Nombre del evento",
            type: "text",
            _uid: "5b9b79d2-32f2-42a1-b89f-203dfc0b6b98"
          },
          {
            component: "text",
            label: "Descripción del evento",
            type: "text",
            _uid: "6eff3638-80a7-4427-b07b-4c1be1c6b186"
          },
          {
            component: "text",
            label: "Patrocinador",
            type: "text",
            _uid: "7f885969-f8ba-40b9-bf5d-0d57bc9c6a8d"
          },
          {
            component: "text",
            label: "Preferencia asociada",
            type: "text",
            _uid: "a0fabdb9-d4c5-4e04-97b9-0c480f42ec68"
          },
          {
            component: "text",
            label: "Duración del evento",
            type: "text",
            _uid: "f61233e8-565e-43d0-9c14-7d7f220c6020"
          }
        ]
      },
    ]
  },
];
