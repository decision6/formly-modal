const model = {
  name: '',
  age: '',
  genre: 1,
  email: '',
  phone: '',
  ocupation: ''
}

const fieldsGroups = [
  {
    title: 'Main informations',
    color: 'negative',
    fields: [
      {
        key: 'name',
        required: true,
        type: 'input',
        templateOptions: {
          field: {
            count: 50
          },
          input: {
            'stack-label': 'Type your name',
            'max-length': 50
          }
        }
      },
      {
        key: 'age',
        required: true,
        type: 'input',
        templateOptions: {
          input: {
            'stack-label': 'Type your age',
            min: 0,
            type: 'number'
          }
        }
      }
    ]
  },
  {
    title: 'Optional informations',
    color: 'positive',
    fields: [
      {
        key: 'genre',
        type: 'select',
        templateOptions: {
          select: {
            'stack-label': 'Select your genre',
            options: [
              { label: 'Male', value: 1 },
              { label: 'Female', value: 2 },
              { label: 'Other', value: 3 }
            ]
          }
        }
      },
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          input: {
            'stack-label': 'Type your gmail email',
            suffix: '@gmail.com',
            type: 'email'
          }
        }
      }
    ]
  },
  {
    title: 'Other Optional informations',
    fields: [
      {
        key: 'phone',
        type: 'input',
        templateOptions: {
          input: {
            'stack-label': 'Type your phone'
          }
        }
      },
      {
        key: 'ocupation',
        type: 'input',
        templateOptions: {
          input: {
            'stack-label': 'Type where are you working'
          }
        }
      }
    ]
  }
]

export default {
  model,
  fieldsGroups
}
