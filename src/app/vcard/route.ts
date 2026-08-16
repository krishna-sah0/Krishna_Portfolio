import { NextResponse } from "next/server";
import VCard from "vcard-creator";
import fs from "fs";
import path from "path";

import { USER } from "@/features/profile/data/user";
import { decodeEmail, decodePhoneNumber } from "@/utils/string";

export const dynamic = "force-static";

export async function GET() {
  const card = new VCard();

  card
    .addName(USER.lastName, USER.firstName)
    .addPhoneNumber(decodePhoneNumber(USER.phoneNumber))
    .addAddress(USER.address)
    .addEmail(decodeEmail(USER.email))
    .addURL(USER.website);

  const photo = getVCardPhoto(USER.avatar);
  if (photo) {
    card.addPhoto(photo.image, photo.mine);
  }

  if (USER.jobs.length > 0) {
    const company = USER.jobs[0];
    card.addCompany(company.company).addJobtitle(company.title);
  }

  return new NextResponse(card.toString(), {
    status: 200,
    headers: {
      "Content-Type": "text/x-vcard",
      "Content-Disposition": `attachment; filename=${USER.username}-vcard.vcf`,
    },
  });
}

function getVCardPhoto(url: string) {
  try {
    if (!url.startsWith("/")) {
      return null;
    }
    const filePath = path.join(process.cwd(), "public", url);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const buffer = fs.readFileSync(filePath);
    if (buffer.length === 0) {
      return null;
    }

    const image = buffer.toString("base64");
    const mine = url.endsWith(".png") ? "png" : "jpeg";

    return {
      image,
      mine,
    };
  } catch (err) {
    console.error("Error reading vcard photo:", err);
    return null;
  }
}
