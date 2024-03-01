export async function getData(req, res){
    
    const fakeData = {
        status: 'Success',
        message: 'You have access to the API'
    }


    res.status(200).send(fakeData);
}