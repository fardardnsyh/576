import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';

export async function POST(request: Request) {
  // Connect to the database
  await dbConnect();

  try {
    const { username } = await request.json();
    const decodedUsername = decodeURIComponent(username);
    const user = await UserModel.findOne({ username: decodedUsername });

    if (!user) {
      return Response.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }

    // Here you could return a success message or perform any action needed
    return Response.json(
      { success: true, message: 'User found. No verification needed.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing request:', error);
    return Response.json(
      { success: false, message: 'Error processing request' },
      { status: 500 }
    );
  }
}
