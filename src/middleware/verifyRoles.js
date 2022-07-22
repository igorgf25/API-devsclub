const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        console.log(req.roles)

        if (!req?.roles) return res.sendStatus(401);
        console.log("Passou o if do req.roles")

        const rolesArray = [...allowedRoles];
        console.log("Role empresa: " + req.roles)
        console.log("Roles array: " + rolesArray)
        
        const result = rolesArray.includes(req.roles)
        console.log("Result: " + result)

        if (!result) return res.sendStatus(401);

        next();
    }
}

export default verifyRoles