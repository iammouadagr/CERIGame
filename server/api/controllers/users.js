exports.update = (req, res) => {

    res.status(200).json({
        sucess: res.success,
        message: res.message
    }
    );

}

exports.getUserByUsername = (req, res) => {


    res.status(200).json({
        sucess: res.success,
        message: res.message,
        user: res.user
    }
    );
}

exports.checkUserPassword = (req, res) => {


    res.status(200).json({
        success: res.success,
        message: res.message
    }
    );
}
