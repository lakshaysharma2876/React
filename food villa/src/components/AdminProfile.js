const AdminProfile = (props) => {
    return (
        <>
        <h2>Hey everyone i am {props.name}, the admin of this website</h2>
        <h2>You can contact me on my e-mail : {props.email}</h2>
        </>
    );
}

export default AdminProfile;