const User = require('../modals/users');
//let io = require('../../monserveur').io;

exports.login = (req, res) => {

    res.status(200).json({
        email: req.body.email,
        password: req.body.psw
    }
    );
}

exports.loginV1 = (req, res) => {


    //console.log(io);

    if (res.success) {

        res.status(200).json({
            success: res.success,
            session: req.session,
            sessionUser: req.session.user,
            user: res.user
        });

    } else {

        res.status(500).json({
            success: res.success,
            message: res.message
        });

    }



}

exports.logout = async (req, res) => {

    res.isConnected = await User.isConnected(req.body.username, false);
    res.success = true;
    res.status(200).json({
        success: res.success,
        isConnected: res.isConnected
    });


}