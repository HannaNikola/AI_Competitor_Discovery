import { NextResponse } from "next/server";
import { createAgentWorkflow } from "@/src/lib/agentWorkflow";
import { ResultSchema } from "@/src/lib/schemas";

export async function POST(req: Request) {
  const { url } = await req.json();

  try {
    const workflow = createAgentWorkflow();

    const result = await workflow.invoke({
      url,
    });
    const parsed = ResultSchema.safeParse(result);

    if (!parsed.success) {
      console.error(parsed.error);
      return NextResponse.json({
        success: false,
        error: "Invalid pipeline response",
      });
    }
    return NextResponse.json({
      success: true,
      ...parsed.data,
    });
  } catch (error: any) {
    console.error("PIPELINE ERROR:", error);

    return NextResponse.json({
      success: false,
      error: error?.message || "Pipeline failed",
      stack: error?.stack,
    });
  }
}
