import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Wrap = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  background: #fffcef;
  backdrop-filter: blur(4px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  z-index: 60;
`;

const Bar = styled.div`
  position: relative;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
`;

const Left = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const SocialBtn = styled.a`
  display: inline-grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: transparent;
  border: 1px solid rgba(11, 11, 11, 0.06);
  color: var(--text);
  text-decoration: none;
  transition: transform 120ms ease, box-shadow 120ms ease;
  svg {
    display: block;
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(2, 10, 12, 0.06);
  }
`;

const CenterButton = styled.a`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); /* centra perfeitamente */
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.06);
  text-decoration: none;
  color: var(--text);
  transition: transform 120ms ease, box-shadow 120ms ease;
  z-index: 40;
  &:hover {
    transform: translate(-50%, -50%) scale(1.03);
    box-shadow: 0 8px 22px rgba(2, 10, 12, 0.06);
  }
  svg {
    width: 22px;
    height: 22px;
  }
`;

const Greeting = styled.div`
  color: var(--muted);
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;
  @media (max-width: 720px) {
    display: none;
  }
`;

export default function Header() {
  const socials = [
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/katerinewitkoski/",
      label: "LinkedIn",
      Icon: FaLinkedin,
    },
    {
      id: "github",
      href: "https://github.com/katerine-dev",
      label: "GitHub",
      Icon: FaGithub,
    },
  ];

  return (
    <Wrap>
      <Bar>
        <Left>
          {socials.map((s) => {
            const Icon = s.Icon;
            return (
              <SocialBtn
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
              >
                <Icon size={16} />
              </SocialBtn>
            );
          })}
        </Left>

        <CenterButton href="#home" aria-label="Ir para o início" title="Início">
          <FiMenu />
        </CenterButton>

        <Right>
          <Greeting>
            olá, sou <strong style={{ color: "var(--text)" }}>Katerine Witkoski</strong>
          </Greeting>
        </Right>
      </Bar>
    </Wrap>
  );
}
