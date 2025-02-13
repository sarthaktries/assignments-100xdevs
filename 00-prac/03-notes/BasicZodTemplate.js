const z = require("zod");

function validator(data) {
    const validSchema = z.object({
        email: z.string().email(),
        password: z.string().min(8)
    });

    const response = validSchema.safeParse(data);
    console.log(response);
}

validator({
    email : "hello@gmail.com",
    password : "123456789876543"
});
