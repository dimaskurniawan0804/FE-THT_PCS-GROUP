function mapingData(obj){
    const result = {
        code: obj.code,
        msg: obj.msg,
        data: {
            Building: [],
            Dashboard: [],
            Enegery: []
        }
    }


    obj.data.forEach((el)=>{
        const mainCategory = el.name.split(".")[0]
        const subCategory = el.name.split(".")[1].charAt(0).toUpperCase() + el.name.split(".")[1].slice(1)
        const tempData = {
            id: el.id,
            name: subCategory,
            html_id: el.name
        }

        switch (mainCategory.toLowerCase()) {
            case "building":
                result.data.Building.push(tempData)
                break;
                case "dashboard":
                result.data.Dashboard.push(tempData)
                break;
                case "energy":
                result.data.Enegery.push(tempData)
                break;
            default:
                break;
        }
       
    })
    return result
}

const data = {
    code: 200,
    msg: "oke",
    data: [
        {
            id:14,
            name: "building.create"
        },
        {
            id:15,
            name: "dashboard.delete"
        },
        {
            id:16,
            name: "energy.index"
        },
        {
            id:17,
            name: "building.index"
        },
        {
            id:18,
            name: "building.delete"
        },

    ]
}

console.log(mapingData(data))
console.log(mapingData(data).data)

// make data for chart

function calculateCategory(data){
    // console.log(data.data)
    const mainCategoryLabel = []
    const dataSetMainCategory = []

    const subCategoryLabel = []
    const dataSetSubCategory = []
    
    const temp = {}

    // loop for map main category
    for(let i in data.data){
        mainCategoryLabel.push(i)
        dataSetMainCategory.push(data.data[i].length)
        data.data[i].forEach((el)=>{
            if(!temp[el.name]){
                temp[el.name] = 1
            } else {
                temp[el.name] += 1
            }
        })
    }

    // loop for map sub category
    for(let i in temp){
        subCategoryLabel.push(i)
        dataSetSubCategory.push(temp[i])
    }

    const allLabel = [...mainCategoryLabel,...subCategoryLabel]
    const allDataSet = [...dataSetMainCategory, ...dataSetSubCategory]

    // console.log(allLabel);
    // console.log(allDataSet);
    return {allLabel, allDataSet}
}

