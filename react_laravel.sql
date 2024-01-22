-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 26, 2023 at 08:30 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_laravel`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_12_01_054029_create_roles_table', 1),
(6, '2023_12_10_131857_create_products_table', 2),
(7, '2023_12_25_045834_create_product_lists_table', 3),
(8, '2023_12_25_095551_create_product_carts_table', 4),
(9, '2023_12_25_125218_create_product_details_table', 5);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_carts`
--

CREATE TABLE `product_carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `image` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `quantity` varchar(255) NOT NULL,
  `unit_price` varchar(255) NOT NULL,
  `total_price` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_details`
--

CREATE TABLE `product_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `short_description` varchar(255) NOT NULL,
  `long_description` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_details`
--

INSERT INTO `product_details` (`id`, `product_id`, `image`, `short_description`, `long_description`, `created_at`, `updated_at`) VALUES
(1, 1, 'https://sg-test-11.slatic.net/other/roc/135ed00207f8b5abcbedae359cb8021f.jpg', 'short', 'long', NULL, NULL),
(2, 5, NULL, '1fdgfd', 'long', NULL, NULL),
(3, 6, NULL, '1fdgfd', 'long', NULL, NULL),
(4, 7, NULL, 'sho', 'long', NULL, NULL),
(5, 8, NULL, 'sho', 'long', NULL, NULL),
(6, 9, NULL, 'ert', 'ert', NULL, NULL),
(7, 10, NULL, 'Fast delivery', 'Comfortable nice t shirt for men', NULL, NULL),
(8, 11, NULL, 'Fast delivery', 'Comfortable nice t shirt for men', NULL, NULL),
(9, 12, NULL, 'fast delivery', 'nice kids toy to play with', NULL, NULL),
(10, 13, NULL, 'fast delivery', 'nice kids toy to play with', NULL, NULL),
(11, 14, NULL, 'fast delivery', 'easy nice to clean', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_lists`
--

CREATE TABLE `product_lists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `special_price` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `category` varchar(255) NOT NULL,
  `remark` varchar(25) NOT NULL,
  `subcategory` varchar(255) NOT NULL,
  `product_code` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_lists`
--

INSERT INTO `product_lists` (`id`, `user_id`, `title`, `price`, `special_price`, `image`, `category`, `remark`, `subcategory`, `product_code`, `status`, `created_at`, `updated_at`) VALUES
(1, 6, 'test', '50', '40', 'https://www.protek.it/wp-content/uploads/DEMO-ONLINE-1.png', 'demo ', 'top', 'test', '564', '1', NULL, NULL),
(10, 9, 'Mens T-Shirt', '500', '400', 'http://127.0.0.1:8000/upload/product/1786319330595363.jpg', 'Men', 'top', 'Shirt', '555', '1', NULL, '2023-12-25 23:30:52'),
(11, 9, 'Casual Mens T-Shirt', '600', '500', 'http://127.0.0.1:8000/upload/product/1786319826890593.jpg', 'Men', 'top', 'Shirt', '556', '0', NULL, NULL),
(12, 9, 'toy', '1200', '700', 'http://127.0.0.1:8000/upload/product/1786320462272726.webp', 'kids', 'top', 'kids', '569', '1', NULL, '2023-12-26 00:24:08'),
(13, 9, 'toy collection', '800', '750', 'http://127.0.0.1:8000/upload/product/1786320586133043.jpg', 'kids', 'top', 'kids', '567', '1', NULL, '2023-12-26 00:55:04'),
(14, 9, 'Fidar', '100', '90', 'http://127.0.0.1:8000/upload/product/1786320820727369.jpg', 'kids', 'top', 'kids', '800', '1', NULL, '2023-12-25 23:30:58');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `privilege` varchar(255) NOT NULL,
  `ref_id` int(10) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `privilege`, `ref_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'user', 2001, 1, '2023-12-04 04:53:46', '2023-12-04 04:53:46'),
(2, 'user', 2001, 4, '2023-12-04 07:23:44', '2023-12-04 07:23:44'),
(3, 'user', 2001, 5, '2023-12-04 07:24:42', '2023-12-04 07:24:42'),
(4, 'user', 2001, 6, '2023-12-04 11:30:14', '2023-12-04 11:30:14'),
(5, 'user', 2001, 7, '2023-12-05 10:19:18', '2023-12-05 10:19:18'),
(6, 'user', 2001, 8, '2023-12-05 10:21:00', '2023-12-05 10:21:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `role` enum('admin','user','vendor') NOT NULL DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `phone`, `role`, `created_at`, `updated_at`) VALUES
(5, 'm', '$2y$12$2OJW4yi.4451Y6AQjDPDueBX6m38lBksym6ynwVcKDEJH.e3UIyxO', 'mishu@gmail', '1548545', 'admin', '2023-12-04 07:24:42', '2023-12-04 07:24:42'),
(6, 'mishu', '$2y$12$9Zbt8XTEW1CbWt9wfEprr.10/NSlQg7jjqVVWUxiIqBY6WAHYl2au', 'mishu@g', '015878454', 'admin', '2023-12-04 11:30:13', '2023-12-04 11:30:13'),
(7, 'rakib', '$2y$12$fMroCzQjLOY0S5D9h31KQu4j8aRZcmzv386N4rI8G10efobbulod6', 'raku@g', '420', 'user', '2023-12-05 10:19:18', '2023-12-05 10:19:18'),
(8, 'miraj', '$2y$12$Ixt7Jeg6i6zCwknP.QJbZ.p7UdggZQdEg5wGKjtjUCuLQdhM1BA2.', 'mira@g', '43242343', 'user', '2023-12-05 10:21:00', '2023-12-05 10:21:00'),
(9, 'alamin', '$2y$12$pcgZvUMiBr/249gHV6PLgOl/NNb8IckSS8M0jtY9q16LEb6AIqEei', 'ag@', '234324234', 'vendor', '2023-12-05 12:37:00', '2023-12-05 12:37:00'),
(11, 'rakahsan', '$2y$12$dMyM60lQmo8wFYDHY5hYNuuesjmKq.J3a5yd0HQEF5p5PSLDFPPZq', 'raku@g', '012545445487', 'vendor', '2023-12-10 06:38:05', '2023-12-10 06:38:05'),
(12, 'shuvo', '$2y$12$eI5iM25.3Lvilg8UbYzLBO0/lFzBOT.rlEAjj5Wx8qmD.MmE.Hkcq', 'shuvo@gmai', '012845245', 'user', '2023-12-10 08:43:31', '2023-12-10 08:43:31'),
(13, 'aur', '$2y$12$TFDf6VGvHGYLYFuyZAXWduAR4PoXi5O7th4934hpRjUbh5AcAGQOG', 'aur@gmai', '42065', 'user', '2023-12-17 13:26:11', '2023-12-17 13:26:11'),
(14, 'tania', '$2y$12$eRrNPoK3UGxXofDmhkMV4unDMuww8XtYyC03vqbptLPQNqkEqnkDG', 'tania@gmail', '018452451', 'user', '2023-12-19 14:56:30', '2023-12-19 14:56:30'),
(15, 'raju', '$2y$12$vajQxTz.fua2V2FAvm3iAuVsxeyt6TxdMB/yw6JHXNKM.V0TBImru', 'raju@gmail.com', '018525412', 'vendor', '2023-12-25 23:50:50', '2023-12-25 23:50:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_carts`
--
ALTER TABLE `product_carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_details`
--
ALTER TABLE `product_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_lists`
--
ALTER TABLE `product_lists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_carts`
--
ALTER TABLE `product_carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `product_details`
--
ALTER TABLE `product_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `product_lists`
--
ALTER TABLE `product_lists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
