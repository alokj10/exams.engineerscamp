"use server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function registerNewUser(email: string, name: string): Promise<void> {
    await prisma.user.create({
        data: {
            email: email,
            fullName: name,
            password: 'password',
        },
    });
}

export async function checkIfNewUser(email: string): Promise<boolean> {
    const existingUser = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });
    return existingUser === null;
}
