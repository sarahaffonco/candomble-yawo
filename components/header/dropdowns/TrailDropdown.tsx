import Link from 'next/link';
import Image from 'next/image';

interface TrailDropdownProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  items: readonly { href: string; label: string }[];
  isActive: (href: string) => boolean;
  onSelect: () => void;
}

export function TrailDropdown({
  eyebrow,
  title,
  description,
  image,
  items,
  isActive,
  onSelect,
}: TrailDropdownProps) {
  return (
    <div className="candomble-dropdown" role="menu" aria-label={`Trilha ${title}`}>
      <div className="candomble-dropdown__content">
        <Image
          src={image}
          alt={`Símbolo da trilha ${title}`}
          width={112}
          height={112}
          className="candomble-dropdown__icon"
        />
        <div className="candomble-dropdown__copy">
          <span className="candomble-dropdown__eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <span className="candomble-dropdown__rule" aria-hidden="true" />
          <p>{description}</p>
          <ul>
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  role="menuitem"
                  onClick={onSelect}
                  className={isActive(item.href) ? 'is-active' : undefined}
                >
                  <span aria-hidden="true">→</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}