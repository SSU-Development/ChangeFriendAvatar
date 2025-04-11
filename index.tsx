/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { NavContextMenuPatchCallback } from "@api/ContextMenu";
import { PencilIcon } from "@components/Icons";
import definePlugin from "@utils/types";
import { Menu } from "@webpack/common";
import { User } from "discord-types/general";

export default definePlugin({
    name: "ChangeFriendAvatar",
    description: "Allows you to change your friends' avatars, similar to chaning their nickname.",
    authors: [{ name: "Sophia", id: 1012095822957133976n }],
});

export function openAvatarChanger(discordId: string) {
}

const userContextPatch: NavContextMenuPatchCallback = (children, { user }: { user?: User, onClose(): void; }) => {
    if (!user) return;
    children.push(
        <Menu.MenuItem
            label="Change Friend Nickname"
            id="vc-friend-avatars"
            icon={PencilIcon}
            action={() => openAvatarChanger(user.id)}
        />
    );
};
