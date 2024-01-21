    import mongoose from 'mongoose';

    const secretSchema=mongoose.Schema({
        title:{
            type:String,
            required:true,
        },
        description:{
            type: String,
            required: true,
        },
        user: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
            ref: 'User',
        },

    },
    {
            timestamps: true,
        }
    )
    const Secret = mongoose.model('Secret', secretSchema);

    export default Secret;