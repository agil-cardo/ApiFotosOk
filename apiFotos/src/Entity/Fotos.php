<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\FotosRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Contraints as Asser;

/**
 * @ORM\Entity(repositoryClass=FotosRepository::class)
 */
class Fotos
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("fotos:read")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("fotos:read")
     * @Assert\NotBlank
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("fotos:read")
     */
    private $titulo;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups("fotos:read")
     */
    private $description;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getTitulo(): ?string
    {
        return $this->titulo;
    }

    public function setTitulo(string $titulo): self
    {
        $this->titulo = $titulo;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }
}
